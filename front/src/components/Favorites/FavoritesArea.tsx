import React from "react";
import { Button, ExpandSessionIcon, FavoritesBlock, SessionTitle, SessionTitleArea } from "./style";
import FavoriteComponent from "./FavoriteComponent";

export default function FavoritesArea() {
    return (<>
        <SessionTitleArea>
            <SessionTitle>
                Meus Favoritos
            </SessionTitle>
            <Button>
                <ExpandSessionIcon source={require('../../../assets/expand-icon.png')} />
            </Button>
        </SessionTitleArea>
        <FavoritesBlock>
            <FavoriteComponent username={"Username1"} name={"Luiz Brasil"} />
            <FavoriteComponent username={"Username2"} name={"Luiz Vitor"} />
            <FavoriteComponent username={"Username3"} name={"Mateus Augusto"} />
        </FavoritesBlock>
    </>

    )
}