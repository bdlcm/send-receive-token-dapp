import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import ReactDOM from "react-dom";
import { Button, Card, Grid, Item, Paper } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  const [address, setUserAddress] = React.useState("");
  const [wallet, setWallet] = React.useState("");
  const [usdc, setUsdc] = React.useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");



  async function mintUsdc() {
    const usdc = {
      address: "0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4",
      abi: [
        "function gimmeSome() external",
        "function balanceOf(address _owner) public view returns (uint256 balance)",
        "function transfer(address _to, uint256 _value) public returns (bool success)",
      ],
    };
    
 
    await provider.send("eth_requestAccounts", []);
  
    //Signing messages on the blockchain means creating digital signatures. 
    //These digital signatures are used to prove the ownership of an 
    //address without exposing its private key.
    const signer = provider.getSigner();
    let userAddress = await signer.getAddress();
    const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);
  
    const tx = await usdcContract.gimmeSome({ gasPrice: 20e9 });
    console.log(`Transaction hash: ${tx.hash}`);
  
    const receipt = await tx.wait();
    console.log(`Transaction confirmed in block ${receipt.blockNumber}`);
    console.log(`Gas used: ${receipt.gasUsed.toString()}`);
  }

  async function getAddress() {

    const signer = provider.getSigner();

    const userAddress = await signer.getAddress();
    provider.getBalance(userAddress).then((balance) => {
      setUserAddress(userAddress);

      // convert a currency unit from wei to ether
      const balanceInEth = ethers.utils.formatEther(balance);
      setWallet(balanceInEth);
      console.log(`balance: ${balanceInEth} ETH`, userAddress);
      console.log("state", wallet, address);
    });

 
  }




async function main() {

  const usdc = {
    address: "0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4",
    abi: [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function gimmeSome() external",
      "function balanceOf(address _owner) public view returns (uint256 balance)",
      "function transfer(address _to, uint256 _value) public returns (bool success)",
    ],
  };
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  
  const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);

  let usdcBalance = await usdcContract.balanceOf(address);
  usdcBalance = ethers.utils.formatUnits(usdcBalance, 6);
  setUsdc(usdcBalance);
}
 

  useEffect(() => {
    getAddress();
    main();
  });

  // })

  return (
    <>
    <div className="App-header">
    <Paper elevation={3}>


        <Grid container spacing={2}>
       <Grid item xs={8}>
         <Card>
           <CardContent>
             <Typography
               sx={{ fontSize: 14 }}
               color="text.secondary"
               gutterBottom
             >
               Address
             </Typography>
             <Typography variant="h5" component="div">
               {address}
             </Typography>
           </CardContent>
         </Card>
       </Grid>

       <Grid item xs={8}>
         <Card>
           <CardContent>
             <Typography
               sx={{ fontSize: 14 }}
               color="text.secondary"
               gutterBottom
             >
               Eth
             </Typography>
             <Typography variant="h5" component="div">
               {wallet}
             </Typography>
           </CardContent>
         </Card>
       </Grid>
     </Grid>
     <Grid item xs={8}>
         <Card>
           <CardContent>
             <Typography
               sx={{ fontSize: 14 }}
               color="text.secondary"
               gutterBottom
             >
               Usdc
             </Typography>
             <Typography variant="h5" component="div">
               {usdc}
             </Typography>
           </CardContent>
         </Card>
       </Grid>
      
     <Button  onClick={mintUsdc} >Mint USDC</Button>
    </Paper>
    </div>

   
    </>
  );
}

export default App;
