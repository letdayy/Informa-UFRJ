import styled from "styled-components/native"

export const Screen = styled.View`
display:flex;
flex:1;
align-items: center;
background-color:#048C7C;
`
export const Logo = styled.Image`
width:142px;
height: 154px;
margin-top: 40px;
`
export const InputArea = styled.View`
margin-top: 54px;
width: 340px;
height:328px;
`
export const InputBox = styled.View`
width: 327px;
height:52px;
border: 2px white;
border-radius: 10px;
`
export const InputText = styled.Text`
color:white;
font-size: 16;
`
export const ConfirmButton = styled.TouchableOpacity`
margin-top:56px;
width: 327px;
height:52px;
display: flex;
align-items: center;
justify-content: center;
border: 3px white;
border-radius: 10px;
background-color: white;
opacity: 25%;
`

export const ButtonText = styled.Text`
font-size: 20px;
color:white;
`