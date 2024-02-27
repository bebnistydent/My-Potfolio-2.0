import React, { useState } from "react";
import { SectionTitle } from "../../../assets/components/conteiner/Section.Title";
import { TabMenu } from "./tab.menu/Tab.Menu";
import { FlexBox } from "../../../assets/components/conteiner/Flex.box";
import { WorksContent } from "./worksContent";
import socialImage from "./../../../assets/images/Proj-1.webp"
import timerlImage from "./../../../assets/images/proj-2.webp"
import { Conteiner } from "../../../assets/components/conteiner/Conteiner";
import { S } from "./Works_Styles";
import { TabsStatusType } from "./tab.menu/Tab.Menu";



const tabsItems:Array<{status:TabsStatusType,title: string}> = [
    {
        title: "ALL",
        status: "all"
    },

    {
        title: "Landing page",
        status: "landing"
    },

    {
        title: "React",
        status: "react"
    },

    {
        title: "Spa",
        status: "spa"
    },
    
]

const worksData = [
    {
        title: "Social Network",
        src: socialImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim!",
        type: "spa",
    },

    {
        title: "Timer",
        src: timerlImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim!",
        type: "react",

    },
]

export const Works: React.FC = () => {

        const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
        let filteredWorks = worksData

        if (currentFilterStatus === "landing") {
            filteredWorks = worksData.filter(work => work.type === "landing")
        }


        if (currentFilterStatus === "react") {
            filteredWorks = worksData.filter(work => work.type === "react")
        }

        
        if (currentFilterStatus === "spa") {
            filteredWorks = worksData.filter(work => work.type === "spa")
        }

        function changeFilterStatus(value: TabsStatusType) {
                setCurrentFilterStatus(value)
        }

    return(
        <S.Works>

         <Conteiner> 
            <SectionTitle>My works</SectionTitle>

            <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                     currentFilterStatus={currentFilterStatus} />
            <FlexBox justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                {filteredWorks.map((w: {title: string, src: any, text: string}) =>{
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



