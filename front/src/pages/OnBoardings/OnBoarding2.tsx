import React from "react";
import { InfoBox, InfoText, OnBoardingImg1, Screen } from "./style";
import { View } from "react-native";

export default function OnBoarding2() {
    return (
        <Screen>
            <OnBoardingImg1 source={require('../../../assets/Onboarding2-img.png')} />
            <InfoBox>
                <InfoText style={{ fontSize: 35 }}>
                    ACESSO A COMUNIDADES
                </InfoText>
                <View style={{ marginLeft:30,marginRight:30}}>
                    <InfoText style={{ fontSize: 25 }}>
                        Informa UFRJ possui diversas comunidades para discutir todo tipo de assuntos universitários
                    </InfoText>
                </View>
            </InfoBox>
        </Screen>
    )
}