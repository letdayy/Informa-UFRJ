import styled from "styled-components/native"

export const Button = styled.TouchableOpacity`
`
export const AddPhtArea= styled.View`
display:flex;
align-items: center;
`

export const ProfileIcon = styled.Image`
width: 99px;
height:99px;
`

export const UsernameText = styled.Text`
font-size:24px;
font-weight: 700;
margin-top: 16px;
`




export const OptionsArea = styled.View`
display: flex;
justify-content: space-between;
height: 45%;
width:80%;
margin-top: 60px;
`

export const Option = styled.TouchableOpacity`
background-color: #43A99D;
border: 2px #72BFB5;
border-radius: 10px;
display:flex;
align-items: center;
justify-content: center;
height: 48px;
`

export const OptionText = styled.Text`
font-size: 19px;
font-weight: 700;
color: white;
`


export const ChangeDataModal = styled.View`
width: 321px;
height: 279px;
margin: auto;
display: flex;
align-items: center;
border-radius: 16px;
border: 2px solid #048C7C;
background-color: white;
`


export const ModalInputBox = styled.View`
width:301px;
height: 34px;
border-radius: 20px;
margin-top: 16px;
border: 1px solid #048C7C ;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const ModalInput = styled.TextInput`
width:230px;
height: 34px;
margin-left: 24px;
font-size: 14px;
font-weight: bold;
color: #676767;
`
export const CloseEyeIcon = styled.Image`
width: 21px;
height: 22px;
margin-right: 16px;
`

export const Back= styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
align-self: flex-end;
margin-right: 24px;
margin-top: 24px;
`
export const BackText= styled.Text`
font-weight: 500;
font-size: 14;
color:#048C7C;
`

export const BackIcon = styled.Image`
width: 5px;
height: 9px;
margin-right: 4px;
`

export const ConfirmButton = styled.TouchableOpacity`
width: 301px;
height: 37px;
background-color:#048C7C ;
border-radius: 10px;
margin-top: 24px;
`

export const ConfirmText = styled.Text`
color: white;
font-size: 20;
font-weight: bold;
margin: auto;
`
export const SucessCardLogo = styled.Image`
width: 175px;
height: 175px;
margin-top: 6px;
`

export const SucessCardText = styled.Text`
font-size: 16px;
font-weight: 700;
color: #048C7C;
margin: 12px 0;
`