import React, { Component, useContext, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";
import { ethers } from "ethers";

export async function Address() {
    const [address, setUserAddress] = useState("");
   const [wallet, setWallet] = React.useState("");


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
