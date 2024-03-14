import React from "react";
import { Logo } from "../../assets/components/logo/Logo";
import { Conteiner } from "../../assets/components/conteiner/Conteiner";
import { FlexBox } from "../../assets/components/conteiner/Flex.box";
import { DesctopMenu } from "./headerMenu/DesctopMenu";
import { ModileMenu } from "./headerMenu/MobileMenu";
import { S } from "./Header_Styles";



export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <S.Header>
        <Conteiner>
          <FlexBox justify={"space-between"} align={"center"}>
            <Logo />
            {width < breakpoint ? <ModileMenu />
                                : <DesctopMenu />
            }
            
          </FlexBox>
        </Conteiner>
      </S.Header>
    </div>
  );
};
