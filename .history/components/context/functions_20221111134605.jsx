import { ethers, utils } from "ethers";
import React, { useContext } from "react";
import { ContractContext } from "./contract";

function ContractFunctionsHook() {
  const { contract } = useContext(ContractContext);
  const addPortfolio = async ({
    type,
    password,
    amount,
    beneficiary,
    max_amount,
  }) => {
    try {
      const amounts = utils.parseUnits(amount, 18);
      console.log(amounts);
      const error = await contract.callStatic.insure(
        amounts,
        type,
        beneficiary,
        max_amount,
        password
      );
      console.log(error);
      const res = await contract.insure(
        amount,
        type,
        beneficiary,
        max_amount,
        password
      );
      console.log(res);
    } catch (e) {
      console.error(e, "error");
    }
  };
  return {
    addPortfolio,
  };
}

export default ContractFunctionsHook;
