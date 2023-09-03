import React from "react";
import {  OptionsArea } from "./style";
import OptionComponent from "./OptionComponent";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeEmailModal from "./ChangeEmailModal";


export default function ProfileOptions() {
    return (
        <OptionsArea>
            <OptionComponent text={"Minhas Comunidades"} />
            <OptionComponent text={"Meus Posts"} />
            <OptionComponent text={"Meus Favoritos"} />
            <ChangePasswordModal/>
            <ChangeEmailModal/>
        </OptionsArea>
    )
}