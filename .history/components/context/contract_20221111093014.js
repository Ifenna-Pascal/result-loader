import { useMoralis } from "react-moralis";
import { createContext, useContext } from "react";

export const contractContext = createContext();
const address = "0x9C46B0B4c9C5bc05E1D5FEd021f28147C4f3f8C9";

export const ContractProvider = () => {
  const { Moralis } = useMoralis();
  const provider = Moralis.web3;
  const signerOrProvider = provider?.getSigner() ?? provider;
  const contract = new ethers.Contract(
    config.address.marketRegistry,
    marketRegistryABI,
    signerOrProvider
  );
  return contractContext.Provider();
};
