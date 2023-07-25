import React from "react";
import { ButtonText, ConfirmButton, InputArea, InputBox, InputText, Logo, Screen } from "./style";
import { View, Text } from "react-native";

export default function Register() {
    return (
        <Screen>
            <Logo source={require('../../assets/Logo.png')} />
            <InputArea>
                <InputBox>
                    <InputText>
                        Digite seu usuário
                    </InputText>
                </InputBox>
                <InputBox>
                    <InputText>
                        Digite seu e-mail da UFRJ
                    </InputText>
                </InputBox>
                <InputBox>
                    <InputText>
                        Digite sua senha
                    </InputText>
                </InputBox>
                <InputBox>
                    <InputText>
                        Digite sua senha
                    </InputText>
                </InputBox>
            </InputArea>
            <ConfirmButton>
                <ButtonText>Cadastrar</ButtonText>
            </ConfirmButton>
        </Screen>

    )
}