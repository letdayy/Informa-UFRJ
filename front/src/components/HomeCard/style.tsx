import styled from "styled-components/native"
import { Dimensions } from "react-native";

const heightImgPost= 0.4 * Dimensions.get("screen").width; //Altura muda conforme a largura da tela
// const width= 0.4 * Dimensions.get("screen").height; //Altura muda conforme a largura da tela

export const CardContainer = styled.View`
    background: #D9D9D9;
    border-radius: 25px;
    box-shadow: 0px 5px 6px #048C7C;
    width: 100%;
    padding: 16px;
    margin-top: 24px;
    `
export const UserContainer= styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 16px;
    `
export const UserImage = styled.Image`
    width: 35px;
    height: 35px;
    `
export const TitleContainer= styled.View`
    margin: 0px 6px;
    `
export const TitleView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    `
export const UserTitle =styled.Text`
    font-size: 14px;
    margin-right: 4px;
    font-family: 'PoppinsBold';
    color: 'black';
    `
export const Checked = styled.Image`
    width: 15px;
    height: 15px;
    `
export const CategoryText = styled.Text`
    background: #BFD5CF;
    border-radius: 5px;
    padding: 0px 4px;
    font-size: 10px;
    font-family: 'PoppinsBold';
    color: 'black';
    `
export const TimeText= styled.Text`
    font-size: 10px;
    font-family: 'PoppinsBold';
    color: 'black';

`
export const ImagePost = styled.Image`
    width: 100%;
    height: ${heightImgPost}px;
    border-radius: 5px;
`
export const CardText= styled.Text`
font-family: 'PoppinsBold';
color: 'black';
font-size: 12px;
margin: 4px 0px;
text-align: justify;
`
export const MoreText= styled.Text`
    display: none;
`
export const ReactionsView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 6px ;
    align-items: center;
`
export const HeartView= styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const HeartText= styled.Text`
    font-family: 'PoppinsItalic';
    color: 'black';
    font-size: 14px;
    margin-left: 4px;
`