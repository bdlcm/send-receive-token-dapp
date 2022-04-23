import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [address, setUserAddress] = useState("");
  const [wallet, setWallet] = useState("");
  const [signer, setSigner] = useState("");

  async function getAddress() {
    try {
      if (typeof window.ethereum !== undefined) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        setSigner(signer);
        const userAddress = await signer.getAddress();
        let oldBalance = ethers.constants.Zero;

        provider.getBalance(userAddress).then((balance) => {
          setUserAddress(userAddress);

          // convert a currency unit from wei to ether
          const balanceInEth = ethers.utils.formatEther(balance);
          setWallet(balanceInEth);
          console.log("history", process.env.REACT_APP_NOT_SECRET_CODE);
          // viewTransactions();
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
      // throw Error(e.message)
    }
  }

  async function viewTransactions() {

    let provider = new ethers.providers.EtherscanProvider();
    let history = await provider.getHistory("0xb5d85cbf7cb3ee0d56b3bb207d5fc4b82f43f511");

    console.log("history", history);
  }

  useEffect(() => {
    getAddress();
  }, [address]);

  return (
    <LocationContext.Provider
      value={{
        address,
        wallet,
        signer,
        // receiver,
        // amount,
        // addressResponse,
        // amountResponse,
        // isLoading,
        // error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
