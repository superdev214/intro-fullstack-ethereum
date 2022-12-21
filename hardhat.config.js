/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-waffle')
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();


const GOERLI_URL = 'https://goerli.infura.io/v3/939460b989b94e17a47862f19242a1e6'
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY
const ALCHEMY_API_KEY = "kG89L74bQndhbRdi0dWlPmK9qm3VGfNr";
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
      // url: `${GOERLI_URL}`,
      url:`https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey:"34QZRTHPHPWE1FENPC13AADQUBIH8CN215"
  },
}
/**Verify 
 *
SimpleStorage deployed to: 0x9b648262557131538c2683130654f5B4aFd92C01
ERC20 deployed to: 0xA63f55ba55617aD5dD5EB7256058D0535183F356
 * npx hardhat verify --network goerli --contract contracts/Token.sol:NDToken 0xA63f55ba55617aD5dD5EB7256058D0535183F356 "100000000000000000"
 * npx hardhat verify --network rinkeby --contract contracts/Token.sol:GemanepaToken <ContractAddress> "1000000000000000000000000000"
  */