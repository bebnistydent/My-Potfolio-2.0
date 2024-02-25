import styled from "styled-components";
import { theme } from "../../Styles/Theme";
import { font } from "../../Styles/Common";


const Footer = styled.footer `
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

export const S = {
        Footer,
        Name,
        SotialsList,
        SocialItems,
        SocialIconLink,
        Copyright
}