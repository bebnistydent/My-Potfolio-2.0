import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { TabMenu } from "./tab.menu/Tab.Menu";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { WorksContent } from "./worksContent";
import socialImage from "./../../../assets/images/Proj-1.webp"
import timerlImage from "./../../../assets/images/proj-2.webp"
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "./Works_Styles";


const worksItems = ["All","LANDING PAGE","REACT","SPA"];

const workData = [
    {
        title: "Social Network",
        src: socialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim!",
    },

    {
        title: "Timer",
        src: timerlImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim!",
    },
]

export const Works: React.FC = () => {
    return(
        <S.Works>

         <Conteiner> 
            <SectionTitle>My works</SectionTitle>

            <TabMenu menuItems={worksItems} />
            <FlexBox justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                {workData.map((w: {title: string, src: any, text: string}) =>{
                    return <WorksContent 
                            title={w.title} 
                            src={w.src} 
                            text={w.text}  />
                })}

            
            </FlexBox>

            </Conteiner>

        </S.Works>
    );
};



