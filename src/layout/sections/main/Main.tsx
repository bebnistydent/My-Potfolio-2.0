import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/PhotoOfMine.webp"
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { theme } from "../../../Styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Conteiner> 

         <FlexBox align={"center"} justify={"space-between"}> 
            <div>
                 <SmallText>Hi There</SmallText>
                 <MyName>I am <span>Nikita Yerameyeu</span></MyName>
                 <MainTitle>A Web Developer.</MainTitle>
            </div>
            
          <PhotoLine>  
    <Photo src={photo} alt=""/>
         </PhotoLine>

    </FlexBox>
    
           </Conteiner>

        </StyledMain>

    );
};

const StyledMain = styled.section `
    min-height: 100vh;
    background-color: lightblue;
    display: flex;
`

const PhotoLine = styled.div`
    position: relative;
    z-index: 1;

    &::before{
        content: "";
        width: 340px;
        height: 440px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`

const Photo = styled.img `
    width: 320px;
    height: 400px;
    object-fit: cover;

`
const MainTitle = styled.h1 `
    font-weight: 400;
    font-size: 27px;

`

const MyName = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05rem;
    margin: 10px 0; 

    span {
         position: relative;
         z-index: 1;

        &::before {
            content: "";
            display: inline-block;
            width:100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;

        }
    }

`
const SmallText = styled.h2`
font-weight: 400;
font-size: 14px;
`

