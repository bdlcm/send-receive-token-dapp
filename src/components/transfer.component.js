import React, { useContext, useState } from "react";
import { LocationContext } from "../services/location/location.context";
import { Card, Number, BackGround } from "./styles/padding";
import { Button } from "@mui/material";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

export const Transfer = () => {
  const [receiver, setReceiver] = useState();
  const [amount, setAmount] = useState("");
  const { transactionResponse, setTransactionResponse } = useState("");

  const { wallet } = useContext(LocationContext);
  const signer = provider.getSigner();
  const gas = provider.getGasPrice();

  async function transfer() {
 
    console.log("wallet", receiver );

    let money = amount.toString();
    let  tx = signer.sendTransaction({
      to: receiver,
      value: ethers.utils.parseEther(money),
    });

    signer.sendTransaction(tx).then((transaction) => {
      setTransactionResponse(transaction);
   
    });
  }

  return (
    <BackGround>
      <Card>
        <input
          type="text"
          placeholder="Address to send"
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="text"
          placeholder="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </Card>
      {transactionResponse && (
        <Card>
          <Number>{transactionResponse}</Number>{" "}
        </Card>
      )}

      <Button variant="contained" onClick={transfer}>
        Transfer
      </Button>
    </BackGround>
  );
};
