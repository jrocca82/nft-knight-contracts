import { ethers as tsEthers } from "ethers";
import * as GameToken from "./GameToken";
import * as GameItems from "./GameItems";
import * as Marketplace from "./Marketplace";

export interface DeploymentModule {
  contractNames: (...params: any) => string[];
  constructorArguments: (addresses?: any) => any[];
  deploy: (
    deployer: tsEthers.Signer,
    setAddresses: Function,
    addresses?: any
  ) => Promise<tsEthers.Contract>;
  upgrade?: (deployer: tsEthers.Signer, addresses?: any) => void;
}

const modules: DeploymentModule[] = [GameToken, GameItems, Marketplace];

export default modules;
