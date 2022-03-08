import React, {  useContext } from "react";
 import { LocationContext } from "../services/location/location.context";
import {
     Card,
    Descriptor,
    Number,
    BackGround,
   } from "./styles/padding";

 
export  const Address= ()  => {

    const { address, wallet } = useContext(LocationContext);
    
   return(
    <BackGround>
    <Card>
      <Descriptor sx={{ fontSize: 14 }} color="white" gutterBottom>
        Address
      </Descriptor>
      <Number variant="h5" component="div" color="white">
        {address}
      </Number>
    </Card>

    <Card>
      <Descriptor sx={{ fontSize: 14 }} color="text.secondary">
        Eth
      </Descriptor>
      <Number variant="h5" component="div">
        {wallet}
      </Number>
    </Card>
  </BackGround>
  )
}
