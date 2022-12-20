async function main() {
  // We get the contract to deploy
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy(789);
  const Token = await ethers.getContractFactory("NDToken");
  const token = await Token.deploy("ERC20 Token","ERC20-Token")
  // NOTE: All Contracts have an associated address
  console.log("SimpleStorage deployed to:", simpleStorage.address);
  console.log("ERC20 deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//  npx hardhat run --network goerli scripts/deploy.js
