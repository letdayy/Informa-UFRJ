import styled from "styled-components/native"



export const Screen = styled.View`
display:flex;
flex:1;
align-items: center;
background-color:#048C7C;
`

export const Header = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 16px;
`

export const Back = styled.Image`
width:17px;
height: 30px;
margin: 16px 0 0 16px;
`
export const BackButton = styled.TouchableOpacity`
`

export const Logo = styled.Image`
width:100px;
height: 109px;
margin-right: 8px;
`

export const LogoutButton = styled.TouchableOpacity`
align-self: end;
margin:56px 24px 24px 0px;
`
export const LogoutText = styled.Text`
color:#CCCCCC;
font-size: 20px;
`
