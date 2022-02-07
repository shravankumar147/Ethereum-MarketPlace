
require('@nomiclabs/hardhat-waffle');

module.exports = { 
  solidity: '0.8.0',
  networks: { 
    ropsten: { 
      url: 'https://eth-ropsten.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY',
      accounts: [YOUR_EXPORTED_PRIVATE_KEY_FROM_METAMASK]
    }
  }
}