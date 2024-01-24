import React from "react";
import styled from "styled-components";
import { Logo } from "../../assets/components/logo/Logo";
import { Menu } from "../../assets/components/menu/Menu";


const items = ["Home","Skils","Works","Testimony","Contact"];

export const Header = () => {
    return (

        <div>
 <StyledHeader>

               <Logo />

               <Menu menuItems={items} />
            
 </StyledHeader>

        </div>

    );
};

const StyledHeader = styled.header `

background-color: lightgreen;
display: flex;
justify-content: space-between;
    
    
`