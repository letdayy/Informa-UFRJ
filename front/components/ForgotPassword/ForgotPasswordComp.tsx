import React from "react";
import { BackLoginButton, EmailIcon, Input, InputBox, RecoverPasswordBox, SendButton, SessionText, SessionTitle } from "./style";
import { useForm, Controller } from 'react-hook-form'




export default function ForgotPasswordComp() {

    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <RecoverPasswordBox>
            <SessionTitle>
                ESQUECI MINHA SENHA
            </SessionTitle>
            <InputBox>
                <EmailIcon source={require('../../assets/send-email-icon.png')} />
                <Controller
                    name='user'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            placeholder='Informe seu E-mail'
                            placeholderTextColor={'#172624'}
                        />
                    )}
                />
            </InputBox>
            <SessionText>
                Você receberá por e-mail um link para
            </SessionText>
            <SessionText style={{marginTop:'0px'}}>
                cadastrar uma nova Senha
            </SessionText>
            <SendButton>
                Enviar
            </SendButton>
            <BackLoginButton>
                Voltar ao Login
            </BackLoginButton>
        </RecoverPasswordBox>
    )
}