import "./App.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { LocationContextProvider } from "./services/location/location.context";
import { MintingContextProvider } from "./services/minting/minting.context";
import { EthersContextProvider } from "./services/ethers/ethers.context";

import { Address } from "./components/location.component";
import { Mint } from "./components/mint.component";
import { Transfer } from "./components/transfer.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <MintingContextProvider>
          <Mint></Mint>
          <Address></Address>
          <Transfer></Transfer>
        </MintingContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}

export default App;
