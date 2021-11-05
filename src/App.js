import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { ethers } from "ethers";
 
 import ReactDOM from 'react-dom';
import {Button, Card, Grid, Item} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
 



function App() {

  const [address, setUserAddress] = React.useState('');
  const [wallet, setWallet] = React.useState('');


 
  async function getAddress () {

      
    const provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    );
 
    const signer = provider.getSigner(); 
  
    const userAddress = await signer.getAddress();
    provider.getBalance(userAddress).then((balance) => {
    setUserAddress(userAddress);

     // convert a currency unit from wei to ether
     const balanceInEth = ethers.utils.formatEther(balance)
     setWallet(balanceInEth);
     console.log(`balance: ${balanceInEth} ETH`, userAddress)
     console.log('state', wallet, address)
    })




  //   const provider = new ethers.providers.Web3Provider(
  //     window.ethereum,
  //     "any"
  //   );
  //   await provider.send("eth_requestAccounts", []);
  //   const signer = provider.getSigner(); 
  
  //  const userAddress = await signer.getAddress();
  //   setUserAddress(userAddress);
  
  

    
   };

     
//  async function getBalance() {
 
//   const provider = new ethers.providers.Web3Provider(
//     window.ethereum,
//     "any"
//   );
//   let balance = await provider.getBalance(address);
//   // we use the code below to convert the balance from wei to eth
//   balance =   ethers.utils.formatEther(balance);
//   setWallet(balance);
//   console.log("wallet", address, wallet)}

 
 useEffect(() => {
 getAddress();
 })


  // })



  return (
 
       
   <>

<Grid container spacing={2}>
  <Grid item xs={6}>
  <Card>
<CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Address
    </Typography>
    <Typography variant="h5" component="div">
    {address}
    </Typography>
   
  </CardContent> 
</Card>
  </Grid>
 
  <Grid item xs={6}>
  <Card>
<CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
     Eth
    </Typography>
    <Typography variant="h5" component="div">
    {wallet}
    </Typography>
   
  </CardContent> 
</Card>
  </Grid>
</Grid>
       



 
  
</>
   


   
  );
}

export default App;
