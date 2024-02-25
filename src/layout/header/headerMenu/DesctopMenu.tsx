import React from "react";
import { Menu } from "./Menu";
import { S } from "./Header.Menu_Styles";

export const DesctopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.DesctopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesctopMenu>
  );
};



  

