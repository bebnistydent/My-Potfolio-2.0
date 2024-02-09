import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Button } from "../../../assets/components/button/Button";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";


export const Slogan = () => {
    return (
        <StyledSlogan>

        <Conteiner> 
          <FlexBox direction={"column"} align={"center"}> 

              <SectionTitle>I Am not Available For Freelance</SectionTitle>
              <Button>Contact me</Button>

           </FlexBox>
       </Conteiner>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section `
    
   
`