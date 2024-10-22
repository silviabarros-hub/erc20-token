require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks:{
    sepolia:{
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
      url: process.env.ALCHEMY_SEPOLIA_URL
    }
  }
};