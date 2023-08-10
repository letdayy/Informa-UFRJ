import React from "react";
import { Text } from "react-native";

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

//Icons
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import CheckedIcon from "../../../assets/checkedIcon.png";

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
              <UserTitle>{userName}</UserTitle>
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
          <MoreText>{supplementaryText}</MoreText>
        </CardText>
        <ReactionsView>
          <HeartView>
            <AntDesign name="hearto" size={30} color="#048C7C" />
            {/* <AntDesign name="heart" size={30} color="#048C7C"/> */}
            <HeartText>{amountOfLikes}</HeartText>
          </HeartView>
          <Feather name="share-2" size={30} color="#048C7C" />
          <Ionicons name="paper-plane" size={30} color="#048C7C" />
        </ReactionsView>
      </CardContainer>
    </>
  );
}
