import React from "react";
import { Icon } from "../../assets/components/icon/Icon";
import { FlexBox } from "../../assets/components/conteiner/Flex.box";
import { S } from "./Footer_Styles";


const socialItemsData = [
    {
        iconid: "instagram"
    },
    
    {
        iconid: "telegram"
    },

    {
        iconid: "vk"
    },

    {
        iconid: "linkedin"
    },

]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexBox direction={"column"} align={"center"}> 
        <S.Name>Nikita</S.Name>

        <S.SotialsList>

            {socialItemsData.map((s: {iconid: string}, index: number)=> {
                return ( 
                       <S.SocialItems key={index}>
                       <S.SocialIconLink>
                       <Icon width={"21px"}                                                 height={"21px"}                                                viewBox = {"0 0 21px 21px"}                                    iconid={s.iconid}/>
                       </S.SocialIconLink>
                       </S.SocialItems> 
                       )
            })}

           
        </S.SotialsList>

        <S.Copyright>© 2023 Nikita Yerameyeu, All Rights Reserved.</S.Copyright>

        </FlexBox>

        </S.Footer>
    );
};

