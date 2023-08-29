import React from "react";
import { Option, Button, OptionText } from "./style";

type OptionInfo = {
    text: string;
}


export default function OptionComponent({text}:OptionInfo) {
    return (
        <Button>
            <Option>
                <OptionText>
                    {text}
                </OptionText>
            </Option>
        </Button>
    )
}