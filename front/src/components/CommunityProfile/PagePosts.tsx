import React from "react";
import { Button, CommunityPostFilter, DownArrowIcon, EndDot, NameTagsView, PostBox, PostImage, PostStatText, PostTags, PostText, PostsScroll, PostsSession, ProfileInfo, ProfilePhoto, RowSession, Stat, StatsIcon, TagView } from "./style";
import { StyleSheet } from 'react-native';
import { FormatNumber } from "./StatsInfo";


let LikesNumber = 60000
let SharesNumber = 10065465
let CommentsNumber = 48

export default function PostsComp() {
    return (
        <PostsSession>
            <PostsScroll>
                <Button>
                    <CommunityPostFilter>
                        <PostText>Relevantes</PostText>
                        <DownArrowIcon source={require('../../../assets/downarrow-icon.svg')} />
                    </CommunityPostFilter>
                </Button>
                <Button>
                    <PostBox>
                        <ProfileInfo>
                            <ProfilePhoto source={require('../../../assets/pageimg-test.jpg')} />
                            <NameTagsView>
                                <PostText style={styles.name}> SpottedUFRJ</PostText>
                                <PostTags>
                                    <TagView>
                                        <PostText style={styles.tag}> Assalto</PostText>
                                    </TagView>
                                    <EndDot />
                                    <PostText style={styles.tag}> 4h</PostText>
                                </PostTags>
                            </NameTagsView>
                        </ProfileInfo>
                        <PostImage source={require('../../../assets/ccmnpost-image.webp')} />
                        <PostText
                            style={styles.postText}
                        > Hoje rolou um assalto no banheiro do CT, fica esperto, galera.
                        </PostText>
                        <RowSession style={styles.statRow}>
                            <Stat>
                                <Button>
                                    <StatsIcon
                                        style={styles.likeIcon}
                                        source={require('../../../assets/like-icon.png')}
                                    />
                                </Button>
                                <PostStatText>{FormatNumber(LikesNumber)}</PostStatText>
                            </Stat>
                            <Stat>
                                <Button>
                                    <StatsIcon
                                        style={styles.shareIcon}
                                        source={require('../../../assets/share-icon.svg')}
                                    />
                                </Button>
                                <PostStatText>{FormatNumber(SharesNumber)}</PostStatText>
                            </Stat>
                            <Stat>
                                <StatsIcon
                                    style={styles.likeIcon}
                                    source={require('../../../assets/comment-icon.svg')}
                                />
                                <PostStatText>{FormatNumber(CommentsNumber)}</PostStatText>
                            </Stat>
                        </RowSession>
                    </PostBox>
                </Button>
                <Button>
                    <PostBox>
                        <ProfileInfo>
                            <ProfilePhoto source={require('../../../assets/pageimg-test.jpg')} />
                            <NameTagsView>
                                <PostText style={styles.name}> SpottedUFRJ</PostText>
                                <PostTags>
                                    <TagView>
                                        <PostText style={styles.tag}> Assalto</PostText>
                                    </TagView>
                                    <EndDot />
                                    <PostText style={styles.tag}> 4h</PostText>
                                </PostTags>
                            </NameTagsView>
                        </ProfileInfo>
                        <PostImage source={require('../../../assets/ccmnpost-image.webp')} />
                        <PostText
                            style={styles.postText}
                        > Hoje rolou um assalto no banheiro do CT, fica esperto, galera.
                        </PostText>
                        <RowSession style={styles.statRow}>
                            <Stat>
                                <Button>
                                    <StatsIcon
                                        style={styles.likeIcon}
                                        source={require('../../../assets/like-icon.png')}
                                    />
                                </Button>
                                <PostStatText>{FormatNumber(LikesNumber)}</PostStatText>
                            </Stat>
                            <Stat>
                                <Button>
                                    <StatsIcon
                                        style={styles.shareIcon}
                                        source={require('../../../assets/share-icon.svg')}
                                    />
                                </Button>
                                <PostStatText>{FormatNumber(SharesNumber)}</PostStatText>
                            </Stat>
                            <Stat>
                                <StatsIcon
                                    style={styles.likeIcon}
                                    source={require('../../../assets/comment-icon.svg')}
                                />
                                <PostStatText>{FormatNumber(CommentsNumber)}</PostStatText>
                            </Stat>
                        </RowSession>
                    </PostBox>
                </Button>
            </PostsScroll>
        </PostsSession>
    )
}


const styles = StyleSheet.create({
    name: {
        marginTop: '16px',
        fontSize: 15
    },
    tag: {
        fontSize: 10
    },
    postText: {
        fontSize: 12,
        width: '90%',
        alignSelf: 'center',
        marginTop:'4px'
    },
    statRow: {
        width: '85%',
        alignSelf: 'center',
        marginTop: '22px',
        justifyContent: 'space-between'
    },
    likeIcon: {
        width: '27px',
        height: '24px'
    },
    shareIcon: {
        width: '30px',
        height: '32px'
    },
    commentIcon: {
        width: '30px',
        height: '30px'
    }
});
