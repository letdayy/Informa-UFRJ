import styled from "styled-components/native"



export const Button = styled.TouchableOpacity`
`

export const PostArea = styled.View`
width: 351px;
height: 645px;
border-radius: 25px;
margin: 24px 12px;
background-color: white;
`

export const TopButtonsArea = styled.View`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 16px;
align-items: center;
justify-content: space-between;
`

export const ExitButton = styled.Image`
width:25px;
height: 25px;
margin-left: 32px;
`
export const PostButton = styled.View`
border: 3px white;
border-radius: 10px;
width: 169px;
height: 52px;
background-color: #ffffff3d;
align-items: center;
justify-content: center;
margin-right: 16px;
`
export const PostButtonTxt = styled.Text`
font-size: 20;
font-weight: bold;
color:white;
`

export const TitleInput = styled.TextInput`
margin: 18px;
font-size: 25;
font-weight: bold;
color:#494949;
`
export const PostInput = styled.TextInput`
margin:0 18px;
font-weight: bold;
color:#494949;
word-wrap: break-word;
word-break: break-all;
text-align: start;
`

export const BottomButtonsArea = styled.View`
display: flex;
flex-direction: row;
width: 126px;
justify-content: space-between;
align-self: flex-start;
align-items: center;
margin-left: 32px;
`

export const BottomButtonIcon = styled.Image`
width: 25px;
height: 25px;
`