import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from "../../src/pages/Profile/Profile";
import CommunityProfile from "../../src/pages/CommunityProfile/CommunityProfile";
import Favorites from "../../src/pages/Favorites/Favorites";
import CreatePost from "../../src/pages/CreatePost/CreatePost";
import Home from "../../src/pages/Home/index";

import News from "../../src/mocks/News"

import Tab from "../Tab/index";


const Stack = createNativeStackNavigator();

export default function () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component= {Tab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Perfil"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Perfil de Comunidade"
                component={CommunityProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Meus Favoritos"
                component={Favorites}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Postar"
                component={CreatePost}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
