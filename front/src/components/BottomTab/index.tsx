import React from "react";
import { NavigationContainer, Icons } from "./style";

// Icones
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import SquaresIcon from "./../../../assets/squaresIcon.svg";

export default function BottomTab() {
  return (
    <NavigationContainer>
      <FontAwesome name="user-circle" size={30} color="#048C7C" />
      <MaterialCommunityIcons name="home-circle" size={36} color="#048C7C" />
      <Icons source={SquaresIcon} />
    </NavigationContainer>
  );
}
