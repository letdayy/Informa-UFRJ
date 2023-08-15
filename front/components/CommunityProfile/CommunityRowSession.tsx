import React from "react";
import { BannerText, Button, RowSession, SelectedSession, SelectedSessionBar } from "./style";
import { StyleSheet, View } from 'react-native';


export default function CommunityRowSession() {
    return (
        <View style={styles.optionBox}>
            <RowSession style={styles.sessionRow}>
                <Button>
                    <BannerText
                        style={styles.postOption}
                        onPress={() => {

                        }}
                    >
                        Posts
                    </BannerText>
                </Button>
                <Button >
                    <BannerText style={styles.aboutOption}>
                        Sobre
                    </BannerText>
                </Button>
                <Button >
                    <BannerText style={styles.menuOption}>
                        Menu
                    </BannerText>
                </Button>
            </RowSession>
            <SelectedSessionBar>
                <SelectedSession />
            </SelectedSessionBar>
        </View>

    )
}



const styles = StyleSheet.create({
    sessionRow: {
        marginTop: '40px',
        justifyContent: 'space-between',
        width:'100%'
    },
    postOption:{
        marginLeft:`18px`
    },
    aboutOption:{
        marginLeft:'0px'
    },
    menuOption:{
        marginRight:'18px'
    },
    optionBox:{
        width:'80%'
    }
});