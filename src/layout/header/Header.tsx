import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/components/logo/Logo";
import { Menu } from "../../assets/components/menu/Menu";
import { Conteiner } from "../../assets/components/conteiner/Conteiner";
import { FlexBox } from "../../assets/components/conteiner/Flex.box";


const items = ["Home","Skils","Works","Testimony","Contact"];

export const Header = () => {
    return (

        <div>
 <StyledHeader>
    <FlexBox justify={"space-between"} align={"center"}> 
      <Conteiner> 
               <Logo />

               <Menu menuItems={items} />
     </Conteiner>
    </FlexBox>
 </StyledHeader>

        </div>

    );
};

const StyledHeader = styled.header `

background-color: lightgreen;

    
    
`