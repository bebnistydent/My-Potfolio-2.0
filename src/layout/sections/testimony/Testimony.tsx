import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Icon } from "../../../assets/components/icon/Icon";
import { Slider } from "../../../assets/components/slider/Slider";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "../skills/skill/Skill.box_styles";



export const Testimony: React.FC = () => {
    return (
     <StyledTestimony id={"testimony"}>
        
        <Conteiner> 

        <SectionTitle>Testimony</SectionTitle>

        <FlexBox direction={"column"} align={"center"}>

        <S.IconBox> 
        <Icon iconid = {"testimony"} />
        </S.IconBox>
        
        <Slider /> 

        </FlexBox>

        </Conteiner>
        
     </StyledTestimony>

    );
};


const StyledTestimony = styled.section `
  background-color: #73eb73;
  min-height: 50vh;

  ${S.IconBox} {
    margin: 40px 0 72px;
  }

`

