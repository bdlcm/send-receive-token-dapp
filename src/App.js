import "./App.css";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { LocationContextProvider } from "./services/location/location.context";
import { MintingContextProvider } from "./services/minting/minting.context";

import { Address } from "./components/location.component";
import { Mint } from "./components/mint.component";
import { Transfer } from "./components/transfer.component";

import { Web3Provider } from "@ethersproject/providers";
 import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

export const  injectedConnector = new InjectedConnector({
  supportedChainIds :[
    1,
    3,
    4
  ]
})

const getLibrary = (provider) =>{
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library
}

export const Wallet  = () => {
  const {chainId, account, activate, active} = useWeb3React();
  const onClick = () =>{
    activate(injectedConnector)
  }

  return (
<div>
  <div>
    chain id: {chainId}
  </div>
  <div>
    account: {account}
  </div>
  {active  ?  (<div>
    active: {chainId}
  </div>) : (
    <button> onClick={onClick}

    </button>
  )
  }
</div>

  )
}


function App() {
  return (
  
      // <Web3Provider getLibrary={getLibrary}>


      // </Web3Provider>
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
