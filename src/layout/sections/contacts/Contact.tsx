import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { Button } from "../../../assets/components/button/Button";
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "./Contacts_styles";

export const Contact: React.FC = () => {
    return (
        <S.Contacts>

             <Conteiner> 

            <SectionTitle>Contact</SectionTitle>
            <S.Form>

             <S.InputField placeholder = {"Name"} />
             <S.InputField placeholder = {"Subject"} />
             <S.InputField placeholder = {"Write your messge"} as = {"textarea"} />
             <Button type = {"submit"}>Send Message</Button>

            </S.Form>

            </Conteiner>

        </S.Contacts>
    );
};



