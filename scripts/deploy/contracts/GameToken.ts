import { deployContract } from "../utils";
import { GameToken } from "../../../build/typechain";

export const contractNames = () => ["gameToken"];

export const constructorArguments = () => [
  process.env.CONSTRUCTOR_TOKEN_NAME,
  process.env.CONSTRUCTOR_TOKEN_SYMBOL,
  process.env.CONSTRUCTOR_TOKEN_DECIMALS
];

export const deploy = async (deployer, setAddresses) => {
  console.log("deploying Token");
  const token: GameToken = (await deployContract(
    "GameToken",
    constructorArguments(),
    deployer,
    1
  )) as GameToken;
  console.log(`deployed Token to address ${token.address}`);
  setAddresses({ gameToken: token.address });
  return token;
};
