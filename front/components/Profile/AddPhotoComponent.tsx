import React from "react";
import { AddPhtArea, AddPhtButton, ProfileIcon, UsernameText } from "./style";

export default function Profile() {
    return (
        <AddPhtArea>
            <AddPhtButton>
                <ProfileIcon source={require('../../assets/user-icon.png')} />
            </AddPhtButton>
            <UsernameText>
                Username
            </UsernameText>
        </AddPhtArea>
    )
}