import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";

export const EthersContext = createContext();

export const EthersContextProvider = ({ children }) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  return (
    <EthersContextProvider.Provider
      value={{
        provider,

        // receiver,
        // amount,
        // addressResponse,
        // amountResponse,
        // isLoading,
        // error,
      }}
    >
      {children}
    </EthersContextProvider.Provider>
  );
};
