import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Button } from "../../../assets/components/button/Button";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";


export const Slogan = () => {
    return (
        <StyledSlogan>

        

      <SectionTitle>I Am not Available For Freelance</SectionTitle>
       <Button>Contact me</Button>

        

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section `
    min-height: 30vh;
    background-color: lightgray;
`