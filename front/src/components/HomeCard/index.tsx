import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

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
  MoreLessButton,
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
  const [isLike, setlike] = useState<boolean>(like)
  const [activeButton, setButton] = useState<boolean>(false)

  return (
    <>
      <CardContainer>
        <UserContainer>
          <UserImage source={userImage} />
          <TitleContainer>
            <TitleView>
              <UserTitle>{userName}</UserTitle>
              {checked === true ? <Checked source={CheckedIcon} /> : null}
            </TitleView>
            <TitleView>
              <CategoryText>{category}</CategoryText>
              <TimeText> • {time}</TimeText>
            </TitleView>
          </TitleContainer>
        </UserContainer>
        <ImagePost source={imagePost} />
        <CardText>
            {activeButton === true ? resumeText + " " + supplementaryText : resumeText + "..." }
            <MoreLessButton onPress={()=> setButton(!activeButton)}><Text> Ler {activeButton? "menos" : "mais"}</Text></MoreLessButton>
        </CardText>
        <ReactionsView>
          <HeartView>
            <TouchableOpacity onPress={ () => setlike(!isLike)}>
              {isLike === true ? <AntDesign name="heart" size={30} color="#048C7C" /> : <AntDesign name="hearto" size={30} color="#048C7C"/>}
            </TouchableOpacity>
            
            <HeartText>{amountOfLikes}</HeartText>
          </HeartView>
          <Feather name="share-2" size={30} color="#048C7C" />
          <Ionicons name="paper-plane" size={30} color="#048C7C" />
        </ReactionsView>
      </CardContainer>
    </>
  );
}
