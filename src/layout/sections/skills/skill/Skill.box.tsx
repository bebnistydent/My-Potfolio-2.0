import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../assets/components/icon/Icon";
import { FlexBox } from "../../../../assets/components/conteiner/Flex.box";
import { theme } from "../../../../Styles/Theme";
import {S} from "./Skill.box_styles"




type SkillPropsType = {

    Iconid: string
    title: string
    description: string

}

export const Skill = (props:SkillPropsType ) => {
    return (
        <S.Skill>
            <FlexBox direction={"column"} align={"center"}> 
                <S.IconBox> 
                    <Icon iconid={props.Iconid}></Icon>
                </S.IconBox>
                    <S.SkillTitle>{props.title}</S.SkillTitle>
            <S.SkillText>{props.description}</S.SkillText>
          </FlexBox>
       </S.Skill>
    );
};



