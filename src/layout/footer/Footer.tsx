import React from "react";
import styled from "styled-components";
import { Icon } from "../../assets/components/icon/Icon";
import { FlexBox } from "../../assets/components/conteiner/Flex.box";
import { theme } from "../../Styles/Theme";
import { font } from "../../Styles/Common";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexBox direction={"column"} align={"center"}> 
        <Name>Nikita</Name>

        <SotialsList>

            <SocialItems>

    <SocialIconLink>
        <Icon width={"21px"} height={"21px"} viewBox = {"0 0 21px 21px"} iconid={"instagram"}/>
    </SocialIconLink>
</SocialItems>

<SocialItems>
    <SocialIconLink>
        <Icon width={"21px"} height={"21px"} viewBox = {"0 0 21px 21px"} iconid={"telegram"}/>
    </SocialIconLink>
</SocialItems>

<SocialItems>
    <SocialIconLink>
        <Icon width={"21px"} height={"21px"} viewBox = {"0 0 21px 21px"} iconid={"vk"}/>
    </SocialIconLink>
</SocialItems>

<SocialItems>
    <SocialIconLink>
        <Icon width={"21px"} height={"21px"} viewBox = {"0 0 21px 21px"} iconid={"linkedin"}/>
    </SocialIconLink>

            </SocialItems>

        </SotialsList>

        <Copyright>© 2023 Nikita Yerameyeu, All Rights Reserved.</Copyright>

        </FlexBox>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;

`
const Name = styled.span `
    
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}

    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;

`

const SotialsList = styled.ul `
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItems = styled.li `
    
`

const SocialIconLink = styled.a `
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
        cursor: pointer;
    }
    
`
const Copyright = styled.small `
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`

