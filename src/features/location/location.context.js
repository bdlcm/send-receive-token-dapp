import React, { useState, useContext, createContext, useEffect } from "react";


export const LocationContext = React.createContext();

export const LocationContextContextProvider = ({ children }) => {
    const [address, setUserAddress] = React.useState("");
    const [receiver, setReceiver] = React.useState("");
    const [amount, setAmount] = React.useState("");
    const [addressResponse, setAddressResponse] = React.useState("");
    const [amountResponse, setamountResponse] = React.useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  
    return (
        <LocationContext.Provider
          value={{
            address,
            receiver,
            amount,addressResponse,
            amountResponse,

            isLoading,
            error,
          }}
        >
          {children}
        </LocationContext.Provider>
      );
    };
    