import React from "react";
import { Back, BackButton, Header, Logo, LogoutButton, LogoutText, Screen } from "./style";
import AddPhotoComponent from "../../components/Profile/AddPhotoComponent";
import ProfileOptions from "../../components/Profile/ProfileOptions";

export default function Profile() {
    return (
        <Screen>
            <Header>
                <BackButton>
                    <Back source={require('../../assets/back-icon.png')} />
                </BackButton>
                <Logo source={require('../../assets/Logo-profile.png')} />
            </Header>
            <AddPhotoComponent />
            <ProfileOptions/>
            <LogoutButton>
                <LogoutText>
                    Sair
                </LogoutText>
            </LogoutButton>
        </Screen>
    )
}