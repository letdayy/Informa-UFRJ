import styled from "styled-components/native"
import { Dimensions } from "react-native";

const height= 0.2 * Dimensions.get("screen").width; //Altura muda conforme a largura da tela

export const NavigationContainer = styled.View`
    background-color: #BFD5CF;
    width: 100%;
    height: ${height}px ;
    position: fixed;
    bottom: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const Icons = styled.Image`
    width: 30px;
    height: 30px;
`