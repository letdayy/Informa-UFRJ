import React, { useState } from "react";
import { ChangeDataModal, OptionText, OptionsArea, Option, Button } from "./style";
import OptionComponent from "./OptionComponent";
import ChangePasswordModal from "./ChangePasswordModal";
import { Modal, StyleSheet } from 'react-native';
import ChangeEmailModal from "./ChangeEmailModal";



export default function ProfileOptions() {

    const [visivel1, setVisivel1] = useState(false)
    const [visivel2, setVisivel2] = useState(false)

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


const styles = StyleSheet.create({
    modal: {
        width:'321px',
        height:'279px',
        backgroundColor:'red'
    },
});