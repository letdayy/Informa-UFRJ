import React from "react";
import { ButtonText, ConfirmButton, Logo, Screen, SmallButton, SmallButtonText, DivisorText } from "./style";
import FormAreaComponent from "../../components/Login/FormAreaLogin";

export default function Register() {
    return (
        <Screen>

            <Logo source={require('../../../assets/Logo.png')} />
            <FormAreaComponent />
            <SmallButton style ={{marginLeft: '235px'}}>
                <SmallButtonText>Esqueci minha senha</SmallButtonText>
            </SmallButton>

            <ConfirmButton>
                <ButtonText>Entrar</ButtonText>
            </ConfirmButton>

            <DivisorText>_____________________ ou _____________________</DivisorText>

            <SmallButton>
                <SmallButtonText>Não é registrado? Crie uma conta.</SmallButtonText>
            </SmallButton>
        </Screen>

    )
}