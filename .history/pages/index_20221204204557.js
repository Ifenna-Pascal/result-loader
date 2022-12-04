import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ConnectWallet from "../components/ConnectWallet";
import { ContractContext } from "../components/context/contract";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const { currentAccount, checkWalletConnected } = useContext(ContractContext);
  useEffect(() => {
    const res = checkWalletConnected();
    console.log(res);
    if (res === true) {
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-tetiary relative flex items-center justify-center overflow-hidden w-full h-screen">
      <ConnectWallet />
    </div>
  );
}
