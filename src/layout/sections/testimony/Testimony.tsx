import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Icon } from "../../../assets/components/icon/Icon";
import { Slider } from "../../../assets/components/slider/Slider";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";



export const Testimony = () => {
    return (
     <StyledTestimony>

        <SectionTitle>Testimony</SectionTitle>

        <FlexBox direction={"column"} align={"center"}>

        <Icon iconid = {"testimony"} />
        <Slider /> 

        </FlexBox>
     </StyledTestimony>

    );
};


const StyledTestimony = styled.section `
  background-color: #73eb73;
  min-height: 50vh;

`

