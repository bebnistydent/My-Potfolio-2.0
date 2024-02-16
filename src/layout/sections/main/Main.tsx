import React from "react";
import styled from "styled-components";
import photo from "./../../../assets/images/PhotoOfMine.webp"
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { theme } from "../../../Styles/Theme";
import { font } from "../../../Styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Conteiner> 

         <FlexBox align={"center"} justify={"space-around"} wrap={"wrap"}> 
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
    margin-top: 65px;

    &::before{
        content: "";
        width: 340px;
        height: 440px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
`

const Photo = styled.img `
    width: 320px;
    height: 400px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
        }
    }

`
const MainTitle = styled.h1 `
    ${font({weight: 400, Fmax: 27, Fmin: 20})}

`

const MyName = styled.h2`
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05rem;
    margin: 10px 0; 

    span {
         position: relative;
         z-index: 1;
         white-space: nowrap;

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

@media ${theme.media.mobile} {
margin: 15px 0 22px;
}

`
const SmallText = styled.h2`
font-weight: 400;
font-size: 14px;

`

