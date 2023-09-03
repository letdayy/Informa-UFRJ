import React from "react";
import PageBannerHeader from "./PageBannerHeader";
import { PageInfo, PageIntroText, PagePhoto, PageTitle } from "./style";


export default function PageInfoComp() {
    return (
        <PageInfo>
            <PageTitle>
                <PagePhoto source={require('../../../assets/pageimg-test.jpg')} />
                <PageIntroText style={{ marginLeft: '10px' }}>SpottedUFRJ</PageIntroText>
            </PageTitle>
            <PageIntroText style={{ fontSize: 15, marginTop: '16px' }}>
                A SpottedUFRJ é uma comunidade focada em discutir assuntos diversos da UFRJ desde coisas sérias até barracos.
            </PageIntroText>
        </PageInfo>
    )
}