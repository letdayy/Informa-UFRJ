// import { View, Text } from "react-native"
import styled from "styled-components/native"

export const FilterView = styled.View`
    flex-direction: row;
    background-color: #D9D9D9;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
    margin-bottom: 6px;
`
export const FilterButton = styled.TouchableOpacity<{$Active: boolean }>`
    align-items: center;
    display: flex;
    flex-direction: row;
    background: ${props => props.$Active ? "#048C7C" : "transparent" };
    border-radius: 15px;
    padding: 6px 10px;
    margin: 0px 4px;
    height: 35px;
    gap: 4px;
`
// background: #048C7C;
export const FilterAButton = styled.TouchableOpacity`
    align-items: center;
    display: flex;
    flex-direction: row;

`
export const FilterText= styled.Text<{$Active: boolean }>`
    font-family: 'PoppinsBold';
    font-size: 16px;
    color: ${props => props.$Active ? "#fff" : "#000" }  ;
`