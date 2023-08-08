import React from "react";
import { Image } from "react-native";
import { NavigationContainer, Icons } from "./style";

// icones
import AccountIcon from "./../../../assets/accountIcon.svg";
import HomeIcon from "./../../../assets/homeIcon.svg";
import SquaresIcon from "./../../../assets/squaresIcon.svg";

export default function BottomTab() {
  return (
  <NavigationContainer>
    <Icons
        source= {AccountIcon}
    />
    <Icons
        source={HomeIcon} 
    />
    <Icons
        source={SquaresIcon} 
    />
  </NavigationContainer>
  )
}
