import React from "react";
import { Back, BannerArea, BannerHeader, Button, DotsIcon, OptionsBox, SearchIcon, UpIcon } from "./style";


export default function PageBannerHeader() {
    return (
            <BannerHeader>
                <Button>
                    <Back source={require('../../../assets/back-icon3.png')} />
                </Button>
                <OptionsBox>
                    <Button>
                        <SearchIcon source={require('../../../assets/search-icon2.png')} />
                    </Button>
                    <Button>
                        <UpIcon source={require('../../../assets/up-icon.png')} />
                    </Button>
                    <Button>
                        <DotsIcon source={require('../../../assets/dots-icon.png')} />
                    </Button>
                </OptionsBox>
            </BannerHeader>
    )
}