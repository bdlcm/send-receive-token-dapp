import React, {  useContext } from "react";
 import { MintingContext } from "../services/minting/minting.context";
import {
     Card,
    Descriptor,
    Number,
    BackGround,
    } from "./styles/padding";
    import { Button } from "@mui/material";

 
export  const Mint = ()  => {

    const { usdcamount, mintUsdc } = useContext(MintingContext);
    
   return(
<BackGround>
        <Card>
          <Descriptor sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Usdc
          </Descriptor>
          <Number variant="h5" component="div">
            {usdcamount}
          </Number>
        </Card>

        <Button variant="contained" onClick={mintUsdc}>
          Mint USDC
        </Button>
      </BackGround> 
  )
}
