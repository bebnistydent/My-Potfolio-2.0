import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Icon } from "../../../assets/components/icon/Icon";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Skill } from "./skill/Skill.box";


export const Skills = () => {
    return (

       <SkillsSection>
       
       <SectionTitle>My Skills</SectionTitle>

       <FlexBox wrap={"wrap"} justify={"space-between"}>
       
       <Skill Iconid = {"code"} 
              title = {"HTML 5"} 
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`} />
       <Skill Iconid = {"css"} 
              title = {"CSS"} 
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`} />
       <Skill Iconid = {"react"} 
              title = {"React"} 
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`} />
       <Skill Iconid = {"typescript"} 
              title = {"Type Script"} 
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`} />
       <Skill Iconid = {"styledComponents"} 
              title = {"Styled Components"} 
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`} />
       <Skill Iconid = {"figma"} 
              title = {"Figma"} 
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`} />

       

       </FlexBox>

       </SkillsSection>

    );
};


const SkillsSection = styled.section `
background-color: pink;
min-height: 100vh;
    
`

