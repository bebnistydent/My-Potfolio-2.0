import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Button } from "../../../assets/components/button/Button";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "./Contacts_styles";
import emailjs from '@emailjs/browser';
import React, { ElementRef, useRef } from 'react';

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    
    emailjs .sendForm('service_6ulyi4d', 'template_ct44c3c', form.current, {
        publicKey: 'CUTxr2bPQF9A6FtPk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
    return (
        <S.Contacts id={"contact"}>

             <Conteiner> 

            <SectionTitle>Contact</SectionTitle>
            <S.Form ref={form} onSubmit={sendEmail}>

             <S.InputField required placeholder = {"Name"} name={"from_name"} />
             <S.InputField required placeholder={"Email"} name={"email"} />
             <S.InputField required placeholder = {"Subject"} name={"subject"} />
             <S.InputField required placeholder = {"Write your messge"} as = {"textarea"} name={"message"} />
             <Button type = {"submit"}>Send Message</Button>

            </S.Form>

            </Conteiner>

        </S.Contacts>
    );
};



