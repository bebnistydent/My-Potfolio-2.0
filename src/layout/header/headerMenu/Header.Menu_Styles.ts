import styled from "styled-components";
import {theme} from "./../../../Styles/Theme";
import { css } from "styled-components";
import { Link } from "react-scroll";



//All Menu styles

const MenuItem = styled.li`
  position: relative;

`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid green;
  color: ${theme.colors.accent};
  transition: ${theme.animation.transition};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;





//Major menu
const NavLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
  cursor: pointer;

  
  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
    transition: ${theme.animation.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.textColor};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;



//MobileMenu Styles
const MobileMenu = styled.nav`
 
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;

  top: -100px;
  right: -100px;

  width: 200px;
  height: 200px;

  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;

    background-color: ${theme.colors.textColor};

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;

      background-color: ${theme.colors.textColor};

      transform: translateY(-10px);

      position: absolute;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;

      background-color: ${theme.colors.textColor};

      transform: translateY(10px);

      position: absolute;

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  display: flex;
  justify-content: center;
  align-content: center;
  transform: translateY(-100%);

  transition: .6s ease-in-out;

  

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 1s ease-in-out;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
      & ul {
        gap: 30px;
      }
    `}
`;

//DesctopMenu
const DesctopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
` 
export const S = {
  NavLink,
  Mask,
  MenuItem,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  DesctopMenu,
}