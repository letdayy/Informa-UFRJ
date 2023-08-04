import styled from "styled-components/native"
import { Dimensions } from "react-native";

const width= 0.2*Dimensions.get("screen").width;

export const NavigationContainer = styled.View`
    background-color: #BFD5CF;
    width: 100%;
    height: ${width} ;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const NavigationImg = styled.Image`
    width: 25px;
    height: 25px;
`