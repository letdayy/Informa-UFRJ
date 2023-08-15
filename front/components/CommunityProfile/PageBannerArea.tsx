import React from "react";
import PageBannerHeader from "./PageBannerHeader";
import { BannerArea, BannerImg} from "./style";
import PageInfoComp from "./PageInfo";
import StatsInfo from "./StatsInfo";
import CommunityRowSession from "./CommunityRowSession";
import PostsComp from "./PagePosts";


export default function ProfileBannerArea() {
    return (
        <BannerArea>
            <BannerImg source={require('../../assets/bannerimg-test.png')}>
                <PageBannerHeader />
                <PageInfoComp />
                <StatsInfo />
                <CommunityRowSession/>
                <PostsComp/>
            </BannerImg>
        </BannerArea>

    )
}
