const bytecode = require('../artifacts/contracts/LastCreate2Factory.sol/LastCreate2Factory.json').bytecode


const rawTransaction = {
  nonce: 0,
  gasPrice: 28 * 1e9,
  value: 0,
  data: bytecode,
  // use the max gas limit 6791946 for arbitrum, Actually only used 438343 gas on ethereum mainnet
  gasLimit: 6791946
};

module.exports = {
  rawTransaction,
  signature: {
    v: 27,
    r: '0x1820182018201820182018201820182018201820182018201820182018201828',
    s: '0x1820182018201820182018201820182018201820182018201820182018201828'
  }
};