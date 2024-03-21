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
import { AnimatePresence, motion } from "framer-motion"



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
        id: 1
    },

    {
        title: "Timer",
        src: timerlImage,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim!",
        type: "react",
        id: 2

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
        <S.Works id={"works"}>

         <Conteiner> 
            <SectionTitle>My works</SectionTitle>

            <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                     currentFilterStatus={currentFilterStatus} />
            <FlexBox justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

            <AnimatePresence>
                {filteredWorks.map((w: {title: string, src: any, text: string, id:number}) =>{
                    return (  
                           <motion.div style={
                             {width: "400px",
                            flexGrow: 1,
                            maxWidth: "540px"}
                    
                           }
                           layout={true}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           key={w.id}
                            > 
                           <WorksContent 
                            title={w.title} 
                            src={w.src} 
                            text={w.text}
                            key={w.id}
                            />
                            </motion.div>
                    )    
                })}
            </AnimatePresence>

            
            </FlexBox>

            </Conteiner>

        </S.Works>
    );
};



