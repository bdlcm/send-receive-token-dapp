import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import { ethers } from "ethers";
 


 



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
 
       
        <div className='App-header'>
      {address}
      <br></br>
      {wallet}
         </div>
   
  );
}

export default App;
