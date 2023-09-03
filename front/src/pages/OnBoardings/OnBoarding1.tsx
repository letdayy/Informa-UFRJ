import React from "react";
import { InfoBox, InfoText, OnBoardingImg1, Screen } from "./style";
import { View } from "react-native";

export default function OnBoarding1() {
    return (
        <Screen>
            <OnBoardingImg1 source={require('../../../assets/Onboarding1-img.png')} />
            <InfoBox>
                <InfoText style={{ fontSize: 35 }}>
                    EM TEMPO REAL
                </InfoText>
                <View style={{ marginLeft:26,marginRight:26}}>
                    <InfoText style={{ fontSize: 25 }}>
                        Informa UFRJ atualiza as notícias dos principais meios de comunicaçao em Tempo Real
                    </InfoText>
                </View>
            </InfoBox>
        </Screen>
    )
}