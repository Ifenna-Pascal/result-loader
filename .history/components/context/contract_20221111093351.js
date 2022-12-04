import { useMoralis } from "react-moralis";
// import { createContext, useContext } from "react";
import abi from "./abi.json";

// export const contractContext = createContext();
const address = "0x9C46B0B4c9C5bc05E1D5FEd021f28147C4f3f8C9";

export const ContractHook = () => {
  const { Moralis } = useMoralis();
  const provider = Moralis.web3;
  const signerOrProvider = provider?.getSigner() ?? provider;
  const contract = new ethers.Contract(address, abi.abi, signerOrProvider);
  return contractContext.Provider;
};
