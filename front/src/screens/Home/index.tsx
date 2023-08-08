import React from "react";
import { Text, View } from "react-native";
import BottomTab from "../../components/BottomTab"
import HomeCard from "../../components/HomeCard";


export default function Home ( { card1 } : any ){
    return(
            <View>
                <View>
                    <HomeCard {...card1} />
                    <HomeCard {...card1} />
                </View>
                <BottomTab />
            </View>
    )
}