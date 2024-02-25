import React from "react";
import { Link } from "../../../assets/components/styled.link/Link";
import { Button } from "../../../assets/components/button/Button";
import { S } from "./Works_Styles";


type WorksContentPropsType = {
    title: string
    text: string
    src: string

}


export const WorksContent: React.FC<WorksContentPropsType> = (props:WorksContentPropsType) => {
    return (
        <S.WorksCell>

            <S.ImageWrapper> 
          <S.Image src={props.src} alt="" />
          <Button>VIEW PROJECT</Button>
          </S.ImageWrapper>

          <S.PaddingWrap> 
          <S.Title>{props.title}</S.Title>
          <S.Text>{props.text}</S.Text>
          <Link href={"#"}>demo</Link>
          <Link href={"#"}>code</Link>
          </S.PaddingWrap>

        </S.WorksCell>
    )
}


