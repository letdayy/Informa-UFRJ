import styled from "styled-components/native"

export const Screen = styled.View`
display:flex;
flex:1;
align-items: center;
background-color:#048C7C;
`
export const Back = styled.Image`
width:17px;
height: 30px;
`
export const BackButton = styled.TouchableOpacity`
align-self: start;
margin: 16px 0 0 16px;
position: absolute;
`

export const Logo = styled.Image`
width:142px;
height: 154px;
margin-top: 40px;
`

export const ConfirmButton = styled.TouchableOpacity`
width: 327px;
height:52px;
display: flex;
align-items: center;
justify-content: center;
background-color: #43A99D;
border: 3px white;
border-radius: 10px;
`

export const ButtonText = styled.Text`
font-size: 20px;
font-weight: 700;
color:white;
`