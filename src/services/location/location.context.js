import React, { useState, useContext, createContext, useEffect } from "react";

export const LocationContext = createContext();

export const LocationContextContextProvider = ({ children }) => {
  const [address, setUserAddress] = useState("");
  const [receiver, setReceiver] =  useState("");
  const [amount, setAmount] =  useState("");
  const [addressResponse, setAddressResponse] = useState("");
  const [amountResponse, setamountResponse] =  useState("");
  const [wallet, setWallet] =  useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <LocationContext.Provider
      value={{
        address,
        receiver,
        amount,
        addressResponse,
        amountResponse,
        isLoading,
        error,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
