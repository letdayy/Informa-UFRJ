import styled from "styled-components/native"


export const RecoverPasswordBox = styled.View`
border-top-right-radius:50px;
border-top-left-radius: 50px;
background-color: white;
display: flex;
align-items: center;
width: 100%;
margin-top: 34px;
height: 100%;
`

export const SessionTitle = styled.Text`
font-weight: 700;
font-size: 30px;
margin-top: 16px;
`

export const InputBox = styled.View`
width: 80%;
display:flex;
flex-direction: row;
border:2px ;
border-top-style:none ;
border-left-style:none ;
border-right-style:none ;
margin-top: 24px;
`

export const EmailIcon =styled.Image`
width: 41px;
height: 32px;
`

export const Input = styled.TextInput`
font-size: 25px;
font-weight: 600;
margin-left: 8px;
width: 85%;
`

export const SessionText = styled.Text`
font-size: 20px;
font-weight: 600;
margin-top: 36px;
`

export const SendButton = styled.TouchableOpacity`
font-size: 40px;
font-weight: 600;
color: white;
width: 237px;
height: 60px;
background-color: #048C7C;
display: flex;
align-items: center;
justify-content: center;
font-family: Arial;
border-radius:15px;
margin-top: 50px;
`

export const BackLoginButton = styled.TouchableOpacity`
font-family: Arial;
font-size: 25px;
font-weight: 600;
margin-top: 16px;
`