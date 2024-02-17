import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Icon } from "../../../assets/components/icon/Icon";
import { Slider } from "../../../assets/components/slider/Slider";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { IconBox } from "../skills/skill/Skill.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";



export const Testimony = () => {
    return (
     <StyledTestimony>
        
        <Conteiner> 

        <SectionTitle>Testimony</SectionTitle>

        <FlexBox direction={"column"} align={"center"}>

        <IconBox> 
        <Icon iconid = {"testimony"} />
        </IconBox>
        
        <Slider /> 

        </FlexBox>

        </Conteiner>
        
     </StyledTestimony>

    );
};


const StyledTestimony = styled.section `
  background-color: #73eb73;
  min-height: 50vh;

  ${IconBox} {
    margin: 40px 0 72px;
  }

`

