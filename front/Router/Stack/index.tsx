import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from "../../pages/Profile/Profile";
import CommunityProfile from "../../pages/CommunityProfile/CommunityProfile";
import Favorites from "../../pages/Favorites/Favorites";
import CreatePost from "../../pages/CreatePost/CreatePost";


const Stack = createNativeStackNavigator();

export default function () {
    return (
        <Stack.Navigator>
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
