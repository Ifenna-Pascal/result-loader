import Head from "next/head";
import Image from "next/image";
import ConnectWallet from "../components/ConnectWallet";
import styles from "../styles/Home.module.css";

export default function Home() {
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
