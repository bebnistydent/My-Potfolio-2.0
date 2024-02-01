import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/components/logo/Logo";
import { Conteiner } from "../../assets/components/conteiner/Conteiner";
import { FlexBox } from "../../assets/components/conteiner/Flex.box";
import { HeaderMenu } from "./HeaderMenu";

const items = ["Home","Skils","Works","Testimony","Contact"];

export const Header = () => {
    return (

        <div>
 <StyledHeader>
    
      <Conteiner> 
      <FlexBox justify={"space-between"} align={"center"}> 
               <Logo />

               <HeaderMenu menuItems={items} />
      </FlexBox>
     </Conteiner>
    
 </StyledHeader>

        </div>

    );
};

const StyledHeader = styled.header `

background: rgda (31, 31, 32, 0.9);
padding: 20px 0;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 99999;

    
    
`