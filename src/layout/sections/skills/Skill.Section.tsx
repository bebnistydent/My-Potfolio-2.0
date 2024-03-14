import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Skill } from "./skill/Skill.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import {S} from "./skill/Skill.box_styles" 


const skillData = [
       {
              Iconid: "code",
              title: "HTML 5",
              description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`,
       },

       {
              Iconid: "css",
              title: "CSS",
              description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`,
       },

       {
              Iconid: "react",
              title: "React",
              description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`,
       },

       {
              Iconid: "typescript",
              title: "Type Script",
              description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`,
       },

       {
              Iconid: "styledComponents",
              title: "Styled Components",
              description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`,
       },

       {
              Iconid: "figma",
              title: "Figma",
              description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim`,
       },


]


export const Skills = () => {
    return (

       <S.Section id={"skills"}>

              <Conteiner> 
       
       <SectionTitle>My Skills</SectionTitle>

       <FlexBox wrap={"wrap"} justify={"space-between"}>

              {skillData.map((s:{description: string, Iconid: string, title: string}, index: number)=> {
              return <Skill Iconid = {s.Iconid} key={index}
                            title = {s.title} 
                            description={s.description} />
              })}

       </FlexBox>

       </Conteiner>
       
       </S.Section>

    );
};




