import React from "react";
import { Logo, Screen } from "./style";

export default function Splash() {
    return (
        <Screen>
            <Logo source={require('../../assets/Logo-profile.png')} />
        </Screen>
    )
}