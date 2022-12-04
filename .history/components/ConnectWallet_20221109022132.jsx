import { useRouter } from "next/router";
import React from "react";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import axios from "axios";

function ConnectWallet() {
  const { connectAsync } = useConnect();
  const handleAuth = async () => {
    const { account, chain } = await connectAsync({
      connector: new InjectedConnector(),
    });
    const userData = { address: account, chain: chain.id, network: "evm" };
    console.log(userData);
    // making a post request to our 'request-message' endpoint
    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = data.message;
    // signing the received message via metamask
    const signature = await signMessageAsync({ message });

    console.log(signature);
  };
  return (
    <div>
      <button
        className="bg-primary py-6 px-16 text-gray-200 font-Poppins tracking-wider shadow-xl text-xl "
        onClick={handleAuth}
      >
        Connect Wallet
      </button>
    </div>
  );
}

export default ConnectWallet;
