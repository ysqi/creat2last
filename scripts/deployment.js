
const rawTx = require("./rawTransaction")
const hre = require("hardhat");
const ethers = hre.ethers
const minETH = ethers.utils.parseEther((rawTx.rawTransaction.gasPrice / 1e18 * rawTx.rawTransaction.gasLimit).toString())

generateDeployTx = () => {
  const signedTx = ethers.utils.serializeTransaction(rawTx.rawTransaction, rawTx.signature)
  const tx = ethers.utils.parseTransaction(signedTx)
  const res = {
    deployer: tx.from,
    signedTx: signedTx,
    contractAddr: ethers.utils.getContractAddress(tx),
  };
  return res;
};

deploy = async (provider, signer = undefined) => {
  const res = generateDeployTx();
  const deployedCode = await provider.getCode(res.contractAddr);

  if (!signer) {
    signer = await provider.getSigner()
  }

  if (deployedCode.length <= 3) {
    const balance = await provider.getBalance(res.deployer)
    if (balance < minETH) {
      const need = minETH.sub(balance)
      console.debug(`${await signer.getAddress()} send ${need / 1e18} ETH to ${res.deployer}`)
      const tx = await signer.sendTransaction({
        to: res.deployer,
        value: need
      });
      await tx.wait()
    }
    // deploy contract
    const tx2 = await provider.sendTransaction(res.signedTx)
    console.debug(`waiting tx mined:${tx2.hash}`)
    const receipt = await tx2.wait()
    if (receipt.status == 0) {
      throw Error("tx failed")
    }
  }
  return await ethers.getContractAt("LastCreate2Factory", res.contractAddr)
};



module.exports.generateDeployTx = generateDeployTx;
module.exports.deploy = deploy;