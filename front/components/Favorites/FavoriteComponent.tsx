import React from "react";
import { Button, FavoriteContainer, FavoriteUserIcon, RealName, RemoveButton, RemoveButtonText, UserInfo, Username } from "./style";
import { View } from "react-native";


type FavoriteInfo = {
    username: string;
    name: string;
}

export default function FavoritesArea({ username, name }: FavoriteInfo) {
    return (
        <FavoriteContainer>
            <Button>
                <UserInfo>
                    <FavoriteUserIcon source={require('../../assets/user-icon2.png')} />
                    <View>
                        <Username style={{ fontSize: 20 }}>
                            {username}
                        </Username>
                        <RealName>
                            {name}
                        </RealName>
                    </View>
                </UserInfo>
            </Button>
            <Button>
                <RemoveButton>
                    <RemoveButtonText>
                        Remover
                    </RemoveButtonText>
                </RemoveButton>
            </Button>
        </FavoriteContainer>
    )
}