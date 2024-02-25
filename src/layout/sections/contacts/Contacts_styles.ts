import styled from "styled-components";
import { theme } from "../../../Styles/Theme";


const Contacts = styled.section `
    
    

`
const Form = styled.form `
max-width: 540px;
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
gap: 16px;
margin: 0 auto;

textarea {
    resize: none;
    min-height: 155px;
}

`
const InputField = styled.input `
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: solid 1px ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;

    color: ${theme.colors.textColor};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    };

    &:focus-visible {
      outline: 1px solid ${theme.colors.borderColor};
    };


`

export const S = {
  Contacts,
  Form,
  InputField,
}