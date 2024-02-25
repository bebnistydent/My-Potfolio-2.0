import styled from "styled-components";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { theme } from "../../../Styles/Theme";
import { Link } from "../../../assets/components/styled.link/Link";
import { Button } from "../../../assets/components/button/Button";


const Works = styled.section `
 ${FlexBox} {
    gap: 30px;
 }

`

const WorksCell = styled.div `
background-color: ${theme.colors.secondaryBg};
width: 330px;
flex-grow: 1;

${Link} {
padding: 10px 0;

& + ${Link} {
    margin-left: 20px;
}
}
   
    @media ${theme.media.desktop} {
        max-width: 540px;
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
    opacity: 1;
        
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


  &::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    top:0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
        
    }
  

    @media ${theme.media.tablet} {
        

   &::before {
   opacity: 1;
       
   }

   ${Button} {
   opacity: 1;
  }

 
    }
    
`

export const S = {
  Works,
  WorksCell,
  Image,
  Title,
  Text,
  PaddingWrap,
  ImageWrapper,
}