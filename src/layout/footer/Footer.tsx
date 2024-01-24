import React from "react";
import styled from "styled-components";
import { Icon } from "../../assets/components/icon/Icon";
import { FlexBox } from "../../assets/components/conteiner/Flex.box";


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
    background-color: #a78b02;
    min-height: 30vh;

`
const Name = styled.span `
    
`

const SotialsList = styled.ul `
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 30px;
`
const SocialItems = styled.li `
    
`

const SocialIconLink = styled.a `
    
`
const Copyright = styled.small `
    
`

