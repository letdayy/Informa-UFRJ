import React from "react";
import { Back, BackButton, ButtonText, ConfirmButton, Logo, Screen } from "./style";
import FormAreaComponent from "../../components/Register/FormArea";

export default function Register() {
    return (
        <Screen>
            <BackButton>
                <Back source={require('../../assets/back-icon.png')} />
            </BackButton>
            <Logo source={require('../../assets/Logo.png')} />
            <FormAreaComponent />
            <ConfirmButton>
                <ButtonText>Cadastrar</ButtonText>
            </ConfirmButton>
        </Screen>

    )
}