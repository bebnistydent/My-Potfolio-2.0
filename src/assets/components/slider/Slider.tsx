import React from "react";
import { FlexBox } from "../conteiner/Flex.box";
import { S } from "./Slider_Styles";

export const Slider: React.FC = () => {

    return (
        <S.Slider>
              
            <FlexBox>

            <S.Slide>
            <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.Text>
            <S.Name>@ivan ivanow</S.Name>
            </S.Slide>

            </FlexBox>

            <S.Pagination>
          <span> </span>
          <span className={"active"}> </span>
          <span> </span>
            </S.Pagination>

        </S.Slider>
    );
};


