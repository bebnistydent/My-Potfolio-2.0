import React from "react";
import styled from "styled-components";
import { Link } from "../../../assets/components/styled.link/Link";
import { theme } from "../../../Styles/Theme";
import { Button } from "../../../assets/components/button/Button";


type WorksContentPropsType = {
    title: string
    text: string
    src: string

}


export const WorksContent = (props:WorksContentPropsType) => {
    return (
        <StyledWorksCell>

            <ImageWrapper> 
          <Image src={props.src} alt="" />
          <Button>VIEW PROJECT</Button>
          </ImageWrapper>

          <PaddingWrap> 
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Link href={"#"}>demo</Link>
          <Link href={"#"}>code</Link>
          </PaddingWrap>

        </StyledWorksCell>
    )
}


const StyledWorksCell = styled.div `
background-color: ${theme.colors.secondaryBg};
max-width: 540px;
width: 100%;

${Link} {
padding: 10px 0;

& + ${Link} {
    margin-left: 20px;
}
}
    
`

const Image = styled.img `
width: 100%;
height: 260px;
object-fit: cover;
    
`


const Title = styled.h3 `
    
`
const Text = styled.p `
    margin: 14px 0 10px;
`

const PaddingWrap = styled.div`
    padding: 25px 20px;
`
const ImageWrapper = styled.div`
  position: relative;

 &:hover{
   

    &::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    top:0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
        
    }
 
    ${Button} {
    opacity: 1;
   }

  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    

    &::before{
        width: 100%;
        height: 100%;
        
        
    };
  }
    
`