import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [address, setUserAddress] = useState("");
  const [wallet, setWallet] = useState("");

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

        const userAddress = await signer.getAddress();
        let oldBalance = ethers.constants.Zero;

        provider.getBalance(userAddress).then((balance) => {
          setUserAddress(userAddress);

          // convert a currency unit from wei to ether
          const balanceInEth = ethers.utils.formatEther(balance);
          setWallet(balanceInEth);
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
      // throw Error(e.message)
    }
  }

  useEffect(() => {
    getAddress();
  }, [wallet]);

  return (
    <LocationContext.Provider
      value={{
        address,
        wallet,
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
