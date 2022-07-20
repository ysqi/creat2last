/* eslint-disable */
const dotenv = require("dotenv")
const task = require("hardhat/config").task
require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

//load keys
var accounts = [];
for (var item of Object.keys(process.env)) {
  if (item.endsWith('PRIVATE_KEY')) {
    accounts.push(process.env[item]);
  }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: {
        enabled: true,
        runs: 99999,
      },
    },
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || '',
      accounts: accounts,
    },
    mainnet: {
      url: process.env.MAINNET_URL || '',
      accounts: accounts,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
