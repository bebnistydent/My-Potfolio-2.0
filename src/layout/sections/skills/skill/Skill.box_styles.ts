import styled from "styled-components";
import { theme } from "../../../../Styles/Theme";
import React from "react";


const Section = styled.section ``

const Skill = styled.div `
width: 330px;
padding: 62px 20px 40px;
flex-grow: 1;

@media ${theme.media.mobile} {
    padding: 62px 0 40px;
}

    
`
export const IconBox = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;


    }
`



const SkillTitle = styled.h3 `
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p `
    text-align: center;
    
`
export const S = {
  Section,
  Skill,
  IconBox,
  SkillTitle,
  SkillText,


}