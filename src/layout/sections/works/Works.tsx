import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Menu } from "../../../assets/components/menu/Menu";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { WorksContent } from "./worksContent";
import socialImage from "./../../../assets/images/Proj-1.webp"
import timerlImage from "./../../../assets/images/proj-2.webp"


const worksItems = ["All","LANDING PAGE","REACT","SPA"];

export const Works = () => {
    return(
        <StyledWorks>

            <SectionTitle>My works</SectionTitle>

            <Menu menuItems={worksItems} />
            <FlexBox justify={"space-around"}>

            <WorksContent title={"Social Network"} src={socialImage} text={"Text"}  />
            <WorksContent title={"Timer"} src={timerlImage} text={"Text"} />

            </FlexBox>

        </StyledWorks>
    );
};



const StyledWorks = styled.section `

min-height: 100vh;
background-color: #cad5ed;

`