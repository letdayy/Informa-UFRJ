import React from "react";
import {  OptionsArea } from "./style";
import OptionComponent from "./OptionComponent";


export default function ProfileOptions() {
    return (
        <OptionsArea>
            <OptionComponent text={"Minhas Comunidades"} />
            <OptionComponent text={"Meus Posts"} />
            <OptionComponent text={"Meus Favoritos"} />
            <OptionComponent text={"Alterar Senha"} />
            <OptionComponent text={"Alterar E-mail"} />
        </OptionsArea>
    )
}