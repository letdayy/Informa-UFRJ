import React from "react";
import { Back, Button, Header, Screen } from "./style";
import UserNSearch from "../../components/Favorites/User&Seach";
import FavoritesArea from "../../components/Favorites/FavoritesArea";

export default function Favorites() {
    return (
        <Screen>
            <Header>
                <Button>
                    <Back source={require('../../assets/back-icon2.png')} />
                </Button>
            </Header>
            <UserNSearch />
            <FavoritesArea />
        </Screen>
    )
}