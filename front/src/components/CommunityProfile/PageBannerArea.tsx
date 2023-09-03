import React from "react";
import PageBannerHeader from "./PageBannerHeader";
import { BannerArea, BannerImg, Button, CreatePostBtn, CreatePostBtnImg } from "./style";
import PageInfoComp from "./PageInfo";
import StatsInfo from "./StatsInfo";
import CommunityRowSession from "./CommunityRowSession";
import PostsComp from "./PagePosts";
import { useNavigation } from "@react-navigation/native";


export default function ProfileBannerArea() {
    const navigation = useNavigation()
    return (
        <BannerArea>
            <BannerImg source={require('../../../assets/bannerimg-test.png')}>
                <PageBannerHeader />
                <PageInfoComp />
                <StatsInfo />
                <CommunityRowSession />
                <PostsComp />
            </BannerImg>
            <Button
            onPress={()=>{navigation.navigate('Postar')}}
            >
                <CreatePostBtn>
                    <CreatePostBtnImg source={require('../../../assets/createpostbutton-img.svg')} />
                </CreatePostBtn>
            </Button>
        </BannerArea>

    )
}
