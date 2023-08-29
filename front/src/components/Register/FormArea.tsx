import React from "react";
import { Input, InputArea, InputBox, InputIcon, Button, RevealIcon } from "./style";
import { useForm, Controller } from 'react-hook-form'


type FormInfo = {
    icon: string;
    holder: string;
}



export default function FormAreaComponent() {

    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <InputArea>
            <InputBox>
                <InputIcon source={require('../../../assets/user-icon.png')} />
                <Controller
                    name='user'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            placeholder='Digite seu Usuário'
                            placeholderTextColor={'white'}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
            </InputBox>
            <InputBox>
                <InputIcon source={require('../../../assets/email-icon.png')} />
                <Controller
                    name='email'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            placeholder='Digite seu e-mail da UFRJ'
                            placeholderTextColor={'white'}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
            </InputBox>
            <InputBox>
                <InputIcon source={require('../../../assets/password-icon.png')} />
                <Controller
                    name='password'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            placeholder='Digite sua senha'
                            placeholderTextColor={'white'}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                <Button>
                    <RevealIcon source={require('../../../assets/eye-icon.png')} />
                </Button>
            </InputBox>
            <InputBox>
                <InputIcon source={require('../../../assets/password-icon.png')} />
                <Controller
                    name='confirm-password'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            placeholder='Confirme sua senha'
                            placeholderTextColor={'white'}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                <Button>
                    <RevealIcon source={require('../../../assets/eye-icon.png')} />
                </Button>
            </InputBox>
        </InputArea>
    )
}