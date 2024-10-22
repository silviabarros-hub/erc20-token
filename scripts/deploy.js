const ethers = require('ethers');
require('dotenv').config();


async function main() {
  const url = process.env.ALCHEMY_SEPOLIA_URL;
  
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const provider = new ethers.JsonRpcProvider(url);

  const weiAmount = await provider.getBalance(deployer.address);
  
  console.log("Account balance:", ethers.formatUnits(weiAmount, 18));

  const Token = await hre.ethers.getContractFactory("SandySand");
  const token = await Token.deploy();

  console.log("Token address:", await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});