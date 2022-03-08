import React, { useState, useContext, createContext, useEffect } from "react";

export const TransferContext = React.createContext();

export const TranferContextProvider = ({ children }) => {
  const [sendAddress, setSendAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { location } = useContext(LocationContext);

  // const retrieveRestaurants = (loc) => {
  //   setIsLoading(true);
  //   setSendAddress([]);

  //   sendRequest(loc)
  //     // .then(restaurantsTransform)
  //     .then((results) => {
  //       setIsLoading(false);
  //       setRestaurants(results);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       setError(err);
  //     });
  // };

  // useEffect(() => {
  //   if (location) {
  //     // const locationString = `${location.lat},${location.lng}`;
  //     // retrieveRestaurants(locationString);
  //   }
  // }, [location]);

  return (
    <TransferContext.Provider
      value={{
        sendAddress,
        isLoading,
        error,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};
