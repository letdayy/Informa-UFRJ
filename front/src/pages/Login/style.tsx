import styled from "styled-components/native"

export const Screen = styled.View`
display:flex;
flex:1;
align-items: center;
background-color:#048C7C;
`

export const SmallButton = styled.TouchableOpacity`
width: fit-content;
//align-self: end;
margin: 5px 22px 44px 0;
`
export const SmallButtonText = styled.Text`
font-size: 12px;
font-weight: 400;
color:white;
`


export const Logo = styled.Image`
width:142px;
height: 154px;
margin-top: 40px;
`

export const DivisorText = styled.Text`
font-size: 12px;
font-weight: 700;
color:white;
margin-block:30px;
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
