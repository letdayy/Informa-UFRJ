import React from "react";
import { Back, Button, Header, Screen } from "./style";
import UserNSearch from "../../components/Favorites/User&Seach";
import FavoritesArea from "../../components/Favorites/FavoritesArea";
import { useNavigation } from "@react-navigation/native";

export default function Favorites() {

    const navigation = useNavigation()

    return (
        <Screen>
            <Header>
                <Button
                onPress={()=>{navigation.goBack()}}
                >
                    <Back source={require('../../assets/back-icon2.png')} />
                </Button>
            </Header>
            <UserNSearch />
            <FavoritesArea />
        </Screen>
    )
}