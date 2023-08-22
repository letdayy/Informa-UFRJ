import React from "react";
import { Button, SearchArea, SearchIcon, UserArea, UserIcon, Username } from "./style";

export default function UserNSearch() {
    return (
        <SearchArea>
            <Button>
                <UserArea>
                    <UserIcon source={require('../../assets/user-icon2.png')} />
                    <Username>
                        Username
                    </Username>
                </UserArea>
            </Button>
            <Button>
                <SearchIcon source={require('../../assets/search-icon.png')} />
            </Button>
        </SearchArea>
    )
}