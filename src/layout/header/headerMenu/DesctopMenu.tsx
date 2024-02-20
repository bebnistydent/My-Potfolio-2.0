import React from "react";
import styled from "styled-components";
import { theme } from "../../../Styles/Theme";
import { Menu } from "./Menu";

export const DesctopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <StyledDesctopMenu>
      <Menu menuItems={props.menuItems} />
    </StyledDesctopMenu>
  );
};

const StyledDesctopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  
`;
