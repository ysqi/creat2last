const { expect } = require("chai");
const hre = require("hardhat");

describe("Lock", function () {

  var factory
  var Mock
  var initCode
  before(async function () {

    const Factory = await hre.ethers.getContractFactory("LastCreate2Factory")
    factory = await Factory.deploy()

    Mock = await hre.ethers.getContractFactory("Mock")
    initCode = (await Mock.getDeployTransaction(0)).data
  })

  it("disable repeat", async function () {

    const salt = ethers.utils.hexZeroPad("0x1", 32)
    await factory.safeCreate2(salt, initCode, "0x")

    await expect(factory.safeCreate2(salt, initCode, "0x")).to.revertedWith('E2')
  })


  it("should be get address before create", async function () {

    const salt = ethers.utils.hexZeroPad("0x2", 32)
    const expectAddress = await factory.findCreate2Address(salt, initCode)

    await expect(
      factory.safeCreate2(salt, initCode, "0x")
    ).to.emit(factory, "Deployed").withArgs(expectAddress, salt)
  })

  it("should have deferent address", async function () {
    expect(
      await factory.findCreate2Address(ethers.utils.hexZeroPad("0x3", 32), initCode)
    ).to.not.eq(
      await factory.findCreate2Address(ethers.utils.hexZeroPad("0x1", 32), initCode)
    )
  })
  it("the first 20 bytes of the salt must match sender address", async function () {

    const me = await hre.ethers.provider.getSigner()
    const meAddress = await me.getAddress()

    salt = ethers.utils.hexConcat([meAddress, ethers.utils.hexZeroPad("0x1", 12)])
    await expect(
      factory.connect(me).safeCreate2(salt, initCode, "0x")
    ).to.emit(factory, "Deployed")

    badSalt = ethers.utils.hexConcat(["0xFf9897926a2B22F85737Db251aAE4B6590089d90", ethers.utils.hexZeroPad("0x1", 12)])

    await expect(
      factory.connect(me).safeCreate2(badSalt, initCode, "0x")
    ).to.revertedWith("E1")
  })

  it("should be revert when call failed", async function () {
    const salt = ethers.utils.hexZeroPad("0x5", 32)
    await expect(factory.safeCreate2(salt, initCode, "0x9999")).to.revertedWith('E4')
  })

  it("should be call when calldata is not empty", async function () {
    const salt = ethers.utils.hexZeroPad("0x6", 32)

    const address = await factory.findCreate2Address(salt, initCode)

    const newContract = await Mock.attach(address)

    const newAdmin = "0xFf9897926a2B22F85737Db251aAE4B6590089d90"
    const calldata = Mock.interface.encodeFunctionData("transferAdmin", [newAdmin])
    await expect(
      factory.safeCreate2(salt, initCode, calldata)
    ).to.emit(newContract, "AdminChanged"
    ).withArgs(newAdmin)


  })


  it("should be revert when call failed", async function () {
    const salt = ethers.utils.hexZeroPad("0x7", 32)
    const newAdmin = "0x0000000000000000000000000000000000000000"
    const calldata = Mock.interface.encodeFunctionData("transferAdmin", [newAdmin])
    await expect(
      factory.safeCreate2(salt, initCode, calldata)
    ).to.revertedWith('E4')
  })


  it("should be revert when create failed", async function () {
    const salt = ethers.utils.hexZeroPad("0x8", 32)
    await expect(
      factory.safeCreate2(salt, "0x9999", "0x")
    ).to.revertedWith('')
  })

  it("shoulde be revert when constructor failed", async function () {
    const salt = ethers.utils.hexZeroPad("0x9", 32)

    const initCodeRevert = (await Mock.getDeployTransaction(1)).data

    await expect(
      factory.safeCreate2(salt, initCodeRevert, "0x")
    ).to.revertedWith('')
  })


  it("shoulde be revert when selfdestruct", async function () {
    const salt = ethers.utils.hexZeroPad("0x9", 32)

    const initCodeSelfdestruct = (await Mock.getDeployTransaction(2)).data

    await expect(
      factory.safeCreate2(salt, initCodeSelfdestruct, "0x")
    ).to.revertedWith('')
  })

});
