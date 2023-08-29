import React from "react";

//Style
import { HeaderText, HeaderView, UserView } from "./styled";

//Icons
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <HeaderView>
      <UserView>
        <FontAwesome name="user-circle" size={36} color="#048C7C" />
        <HeaderText>Username</HeaderText>
      </UserView>
      <MaterialCommunityIcons name="magnify" size={40} color="#048C7C" />
    </HeaderView>
  );
}
