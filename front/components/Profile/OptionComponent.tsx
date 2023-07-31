import React from "react";
import { Option, OptionButton, OptionText } from "./style";

type OptionInfo = {
    text: string;
}


export default function OptionComponent({text}:OptionInfo) {
    return (
        <OptionButton>
            <Option>
                <OptionText>
                    {text}
                </OptionText>
            </Option>
        </OptionButton>
    )
}