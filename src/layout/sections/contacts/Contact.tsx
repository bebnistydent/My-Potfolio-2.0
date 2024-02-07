import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Button } from "../../../assets/components/button/Button";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { theme } from "../../../Styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>

             <Conteiner> 

            <SectionTitle>Contact</SectionTitle>
            <StyledForm>

             <InputField placeholder = {"Name"} />
             <InputField placeholder = {"Subject"} />
             <InputField placeholder = {"Write your messge"} as = {"textarea"} />
             <Button type = {"submit"}>Send Message</Button>

            </StyledForm>

            </Conteiner>

        </StyledContacts>
    );
};


const StyledContacts = styled.section `
    
    

`
const StyledForm = styled.form `
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
