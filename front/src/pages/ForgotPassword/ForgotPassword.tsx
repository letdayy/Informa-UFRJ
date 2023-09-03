import React from "react";
import { Back, Header, Screen, Button, Logo } from "./style";
import ForgotPasswordComp from "../../components/ForgotPassword/ForgotPasswordComp";



export default function ForgotPassword() {
    return (
        <Screen>
            <Header>
                <Button>
                    <Back source={require('../../../assets/back-icon.png')} />
                </Button>
            </Header>
            <Logo source={require('../../../assets/Logo.png')} />
            <ForgotPasswordComp/>
        </Screen>
    )
}