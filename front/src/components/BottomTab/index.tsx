import React from "react";
import { Image } from "react-native";
import { NavigationContainer, NavigationImg } from "./style";

// icones
import AccountIcon from "./../../../assets/accountIcon.svg";
import HomeIcon from "./../../../assets/homeIcon.svg";
import SquaresIcon from "./../../../assets/squaresIcon.svg";

export default function BottomTab() {
  return (
  <NavigationContainer>
    <NavigationImg
        source= {AccountIcon}
    />
    <NavigationImg
        source={HomeIcon} 
    />
    <NavigationImg
        source={SquaresIcon} 
    />
  </NavigationContainer>
  )
}
