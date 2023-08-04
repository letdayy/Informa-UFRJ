import React from "react";
import { Text } from "react-native";
import BottomTab from "../../components/BottomTab"
import HomeCard from "../../components/HomeCard";

export default function Home (){
    return(
        <>
            <HomeCard />
            <BottomTab />
        </>
    )
}