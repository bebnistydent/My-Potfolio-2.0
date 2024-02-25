import React from "react";
import photo from "./../../../assets/images/PhotoOfMine.webp";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "./Main_styles";



export const Main: React.FC = () => {
  return (
    <S.Main>
      <Conteiner>
        <FlexBox align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.MyName>
              I am <span>Nikita Yerameyeu</span>
            </S.MyName>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>

          <S.PhotoLine>
            <S.Photo src={photo} alt="" />
          </S.PhotoLine>
        </FlexBox>
      </Conteiner>
    </S.Main>
  );
};

