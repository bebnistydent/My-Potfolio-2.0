import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/PhotoOfMine.webp"
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";


export const Main = () => {
    return (
        <StyledMain>

         <FlexBox align={"center"} justify={"space-around"}> 
            <div>
                 <span>Hi There</span>
                 <MyName>I am Nikita Yerameyeu</MyName>
                 <MainTitle>A Web Developer.</MainTitle>
            </div>
            
            
    <Photo src={photo} alt=""/>

    </FlexBox>

        </StyledMain>

    );
};

const StyledMain = styled.section `
    min-height: 100vh;
    background-color: lightblue;

`

const Photo = styled.img `
    width: 350px;
    height: 430px;
    object-fit: cover;


    
`
const MainTitle = styled.h1 `
    
`

const MyName = styled.h2`
    
`
