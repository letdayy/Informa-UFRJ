import React from "react";
import { AddPhtArea, Button, ProfileIcon, UsernameText } from "./style";

export default function Profile() {
    return (
        <AddPhtArea>
            <Button>
                <ProfileIcon source={require('../../assets/user-icon.png')} />
            </Button>
            <UsernameText>
                Username
            </UsernameText>
        </AddPhtArea>
    )
}