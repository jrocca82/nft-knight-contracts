import { deployContract } from "../utils";
import { Marketplace } from "../../../build/typechain";

export const contractNames = () => ["marketplace"];

export const constructorArguments = (addresses) => [
  addresses.gameItems
];

export const deploy = async (deployer, setAddresses, addresses) => {
  console.log("deploying Marketplace");
  const marketplace: Marketplace = (await deployContract(
    "Marketplace",
    constructorArguments(addresses),
    deployer,
    1
  )) as Marketplace;
  console.log(`deployed Marketplace to address ${marketplace.address}`);
  setAddresses({ marketplace: marketplace.address });
  return marketplace;
};
