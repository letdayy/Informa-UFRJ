import React from "react";
import { View, Text, Image } from "react-native";

//Style
import {
  CardContainer,
  UserContainer,
  UserImage,
  TitleContainer,
  TitleView,
  UserTitle,
  Checked,
  CategoryText,
  ImagePost,
  CardText,
  ReactionsView,
  HeartView,
  HeartText,
  TimeText,
  MoreText,
} from "./style";
import { Icons } from "../BottomTab/style";

//Imagens
import CheckedIcon from "../../../assets/checkedIcon.png";
import HeartIcon from "../../../assets/heartIcon.svg";
import ShareIcon from "../../../assets/ShareIcon.svg";
import PaperPlaneIcon from "../../../assets/paperPlaneIcon.svg";
interface cardData {
  userImage: any;
  userName: string;
  checked: boolean;
  category: string;
  time: string;
  imagePost: any;
  resumeText: string;
  supplementaryText: string;
  like: boolean;
  amountOfLikes: string;
}
export default function HomeCard({
  userImage,
  userName,
  checked,
  category,
  time,
  imagePost,
  resumeText,
  supplementaryText,
  like,
  amountOfLikes,
}: cardData) {
  return (
    <>
      <CardContainer>
        <UserContainer>
          <UserImage source={userImage} />
          <TitleContainer>
            <TitleView>
              <UserTitle>{ userName }</UserTitle>
              <Checked source={CheckedIcon} />
            </TitleView>
            <TitleView>
              <CategoryText>{category}</CategoryText>
              <TimeText> • {time}</TimeText>
            </TitleView>
          </TitleContainer>
        </UserContainer>
        <ImagePost source={imagePost} />
        <CardText>
          {resumeText}
          <Text>...</Text>
          <MoreText>
            {supplementaryText}
          </MoreText>
        </CardText>
        <ReactionsView>
          <HeartView>
            <Icons source={HeartIcon} />
            <HeartText>{amountOfLikes}</HeartText>
          </HeartView>
          <Icons source={ShareIcon} />
          <Icons source={PaperPlaneIcon} />
        </ReactionsView>
      </CardContainer>
    </>
  );
}
