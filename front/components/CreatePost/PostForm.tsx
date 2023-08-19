import React from "react";
import { BottomButtonIcon, BottomButtonsArea, Button, ExitButton, PostArea, PostButton, PostButtonTxt, PostInput, TitleInput, TopButtonsArea } from "./style";
import { useNavigation } from "@react-navigation/native";




export default function PostForm() {
    const navigation = useNavigation()
    return (
        <>
            <TopButtonsArea>
                <Button onPress={()=>{navigation.goBack()}}>
                    <ExitButton source={require('../../assets/exit-img.svg')} />
                </Button>
                <Button>
                    <PostButton>
                        <PostButtonTxt>Postar</PostButtonTxt>
                    </PostButton>
                </Button>
            </TopButtonsArea>
            <PostArea>
                <TitleInput
                    placeholder='Título'
                    placeholderTextColor={'#494949'}
                />
                <PostInput
                    placeholder='Texto do Post (opcional)'
                    placeholderTextColor={'#494949'}
                    multiline={true}
                    numberOfLines={20}
                />
            </PostArea>
            <BottomButtonsArea>
                <Button>
                    <BottomButtonIcon source={require('../../assets/anexo-icon.svg')} />
                </Button>
                <Button>
                    <BottomButtonIcon source={require('../../assets/up-icon2.svg')} />
                </Button>
                <Button>
                    <BottomButtonIcon style={{ width: 25, height: 5 }} source={require('../../assets/dots-icon2.svg')} />
                </Button>
            </BottomButtonsArea>
        </>

    )
}