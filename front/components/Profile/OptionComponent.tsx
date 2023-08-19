import React from "react";
import { Option, Button, OptionText } from "./style";
import { useNavigation } from "@react-navigation/native";

type OptionInfo = {
    text: string;
}


export default function OptionComponent({ text }: OptionInfo) {

    const navigation = useNavigation()

    return (
        <Option
        onPress={()=>{navigation.navigate(text)}}
        >
            <OptionText>
                {text}
            </OptionText>
        </Option>
    )
}