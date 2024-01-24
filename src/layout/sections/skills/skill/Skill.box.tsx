import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../assets/components/icon/Icon";




type SkillPropsType = {

    Iconid: string
    title: string
    description: string

}

export const Skill = (props:SkillPropsType ) => {
    return (
        <StyledSkill>
        <Icon iconid={props.Iconid}></Icon>
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}</SkillText>
       </StyledSkill>
    );
};



const StyledSkill = styled.div `
width: 30%;
background-color: #e75eab;
margin: 10px;

    
`

const SkillTitle = styled.h3 `
    
`

const SkillText = styled.p `
    
`
