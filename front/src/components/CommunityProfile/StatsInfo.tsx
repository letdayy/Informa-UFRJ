import React from "react";
import { BannerText, BarIcon, Button, Stat, StatsIcon, Unfollow, RowSession } from "./style";
import { StyleSheet } from 'react-native';


let followersNumber = 10065465
let CommentsNumber = 48568


export default function StatsInfo() {
    return (
        <RowSession style={styles.statSession}>
            <Stat>
                <StatsIcon source={require('../../../assets/followers-icon.png')} />
                <BannerText>{FormatNumber(followersNumber)}</BannerText>
            </Stat>
            <Stat>
                <StatsIcon source={require('../../../assets/comments-icon.png')} />
                <BannerText>{FormatNumber(CommentsNumber)}</BannerText>
            </Stat>
            <Button>
                <Unfollow>
                    <BarIcon source={require('../../../assets/bar-icon.png')} />
                    <BannerText>Sair</BannerText>
                </Unfollow>
            </Button>
        </RowSession>
    )
}

export const FormatNumber = (n: number) => {
    if (n >= 1000000) {
        let numberFormated = (n / 1000000)
        if (Number.isInteger(numberFormated)) {
            return `${numberFormated}M`
        }
        else {
            return `${numberFormated.toFixed(1)}M`
        }
    } else if (n >= 1000) {
        let numberFormated = (n / 1000)
        if (Number.isInteger(numberFormated)) {
            return `${numberFormated}K`
        }
        else {
            return `${numberFormated.toFixed(1)}K`
        }
    }
    else {
        return n
    }
}


const styles = StyleSheet.create({
    statSession: {
        justifyContent: 'space-between',
        marginTop: '48px'
    }
});