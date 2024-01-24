import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Button } from "../../../assets/components/button/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>

             <InputField placeholder = {"Name"} />
             <InputField placeholder = {"Subject"} />
             <InputField placeholder = {"Write your messge"} as = {"textarea"} />
             <Button type = {"submit"}>Send Message</Button>

            </StyledForm>
        </StyledContacts>
    );
};


const StyledContacts = styled.section `
    min-height: 50vh;
    background-color: lightblue;
    

`
const StyledForm = styled.form `
max-width: 500px;
width: 100%;
display:flex;
flex-direction:column;
gap: 20px;
margin: 0 auto;

`
const InputField = styled.input `
    

`
