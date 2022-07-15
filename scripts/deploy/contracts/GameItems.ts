import { deployContract } from "../utils";
import { GameItems } from "../../../build/typechain";

export const contractNames = () => ["gameItems"];

export const constructorArguments = () => [
];

export const deploy = async (deployer, setAddresses) => {
  console.log("deploying GameItems");
  const items: GameItems = (await deployContract(
    "GameItems",
    constructorArguments(),
    deployer,
    1
  )) as GameItems;
  console.log(`deployed Items to address ${items.address}`);
  setAddresses({ gameItems: items.address });
  return items;
};
