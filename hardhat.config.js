/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle')
require("dotenv").config();

const GOERLI_URL = 'https://goerli.infura.io/v3/939460b989b94e17a47862f19242a1e6'
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY

module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './frontend/src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `${GOERLI_URL}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
  },
}
