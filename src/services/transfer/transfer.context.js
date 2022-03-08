// import React, { useState, useContext, createContext, useEffect } from "react";
// import { ethers } from "ethers";
// import { EthersContext } from "../ethers/ethers.context";

// export const TransferContext = React.createContext();

// export const TranferContextProvider = ({ children }) => {
//   // const { provider} = useContext(EthersContext);

//   // const [sendAddress, setSendAddress] = useState([]);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   //   const _checkProvider=(operation)=>{
//   //   if (!provider) { logger.throwError("missing provider", Logger.errors.UNSUPPORTED_OPERATION, {
//   //       operation: (operation || "_checkProvider") });
//   //   }

//   // async function transferUsdc() {
//   //   await provider.send("eth_requestAccounts", []);
//   //   const signer = provider.getSigner();
//   //   let userAddress = await signer.getAddress();

//   //   const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);

//   //   try {
//   //     ethers.utils.getAddress(receiver);
//   //   } catch {
//   //     setAddressResponse(`Invalid address: ${receiver}`);
//   //   }

//   //   try {
//   //     ethers.utils.parseUnits(amount, 6).then((val) => {
//   //       if (val.isNegative()) {
//   //         throw new Error();
//   //       }
//   //     });
//   //   } catch {
//   //     console.error(`Invalid amount: ${amount}`);
//   //     setamountResponse(`Invalid amount: ${amount}`);
//   //   }

//   //   const balance = await usdcContract.balanceOf(userAddress);
//   //   if (balance.lt(amount)) {
//   //     let amountFormatted = ethers.utils.formatUnits(amount, 6);
//   //     let balanceFormatted = ethers.utils.formatUnits(balance, 6);
//   //     console.error(
//   //       `Insufficient balance receiver send ${amountFormatted} (You have ${balanceFormatted})`
//   //     );
//   //   }
//   //   let amountFormatted = ethers.utils.formatUnits(amount, 6);

//   //   // response = `Transferring ${amountFormatted} USDC receiver ${receiver.slice(
//   //   //   0,
//   //   //   6
//   //   // )}...`;
//   //   // document.getElementById("transferResponse").innerText = response;
//   //   // document.getElementById("transferResponse").style.display = "block";

//   //   const tx = await usdcContract.transfer(receiver, amount, {
//   //     gasPrice: 20e9,
//   //   });
//   //   // document.getElementById(
//   //   //   "transferResponse"
//   //   // ).innerText += `Transaction hash: ${tx.hash}`;

//   //   const receipt = await tx.wait();
//   //   // document.getElementById(
//   //   //   "transferResponse"
//   //   // ).innerText += `Transaction confirmed in block ${receipt.blockNumber}`;
//   // };

//   return (
//     <TransferContext.Provider
//       value={{
//         sendAddress,
//         isLoading,
//         error,
//       }}
//     >
//       {children}
//     </TransferContext.Provider>
//   );
// }
