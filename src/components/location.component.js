import React, { Component, useContext, useState, useEffect } from "react";
// import { LocationContext } from "../../../services/location/location.context";
import { ethers } from "ethers";
import {
    Text,
    Card,
    Descriptor,
    Number,
    BackGround,
    BackDrop,
  } from "./styles/padding";




export  const Address= ()  => {
  const [address, setUserAddress] = useState("");
  const [wallet, setWallet] = useState("");


  async function getAddress(){
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

  return(
    <BackGround>
    <Card>
      <Descriptor sx={{ fontSize: 14 }} color="white" gutterBottom>
        Address
      </Descriptor>
      <Number variant="h5" component="div" color="white">
        {address}
      </Number>
    </Card>

    <Card>
      <Descriptor sx={{ fontSize: 14 }} color="text.secondary">
        Eth
      </Descriptor>
      <Number variant="h5" component="div">
        {wallet}
      </Number>
    </Card>
  </BackGround>
  )
}
