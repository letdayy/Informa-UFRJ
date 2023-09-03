import React, { useState } from "react";
import { Back, BackIcon, BackText, Button, ChangeDataModal, CloseEyeIcon, ConfirmButton, ConfirmText, ModalInput, ModalInputBox, Option, OptionText, SucessCardLogo, SucessCardText } from "./style";
import { Modal } from "react-native";



export default function ChangePasswordModal() {

    const [visivel1, setVisivel1] = useState(false)
    const [visivel2, setVisivel2] = useState(false)

    return (
        <>
            <Option
                onPress={() => { setVisivel1(true) }}
            >
                <OptionText>
                    Alterar Senha
                </OptionText>
            </Option>
            <Modal
                visible={visivel1}
                transparent={true}
                animationType="fade"
            >
                <ChangeDataModal>
                    <Back
                        onPress={() => { setVisivel1(false) }}
                    >
                        <BackIcon source={require('../../../assets/back-icon2.png')} />
                        <BackText>Voltar</BackText>
                    </Back>
                    <ModalInputBox>
                        <ModalInput
                            placeholder="Digite sua senha atual"
                            placeholderTextColor={'#B1B2B2'}
                        />
                        <Button>
                            <CloseEyeIcon source={require('../../../assets/closeeye-icon.svg')} />
                        </Button>
                    </ModalInputBox>
                    <ModalInputBox>
                        <ModalInput
                            placeholder="Digite sua nova senha"
                            placeholderTextColor={'#B1B2B2'}
                        />
                        <Button>
                            <CloseEyeIcon source={require('../../../assets/closeeye-icon.svg')} />
                        </Button>
                    </ModalInputBox>
                    <ModalInputBox>
                        <ModalInput
                            placeholder="Confirme sua nova senha"
                            placeholderTextColor={'#B1B2B2'}
                        />
                        <Button>
                            <CloseEyeIcon source={require('../../../assets/closeeye-icon.svg')} />
                        </Button>
                    </ModalInputBox>

                    <ConfirmButton
                        onPress={() => {
                            setVisivel1(false)
                            setVisivel2(true)
                        }}

                    >
                        <ConfirmText>
                            Confirmar
                        </ConfirmText>
                    </ConfirmButton>
                </ChangeDataModal>
            </Modal>
            <Modal
                visible={visivel2}
                transparent={true}
                animationType="fade"
            >
                <ChangeDataModal>
                    <SucessCardLogo source={require('../../../assets/sucesscard-logo.png')} />
                    <SucessCardText>Informações atualizadas!</SucessCardText>
                    <ConfirmButton
                        onPress={() => { setVisivel2(false) }}
                        style={{marginTop:0}}
                    >
                        <ConfirmText>
                            Ok
                        </ConfirmText>
                    </ConfirmButton>
                </ChangeDataModal>
            </Modal>
        </>
    )
}