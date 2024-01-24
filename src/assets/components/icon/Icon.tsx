import React from "react";
import styled from "styled-components";
import IconsSprite from "../../images/icons-sprite.svg"


type IconPropsType = {
    iconid: string
    width?: string
    height?: string
    viewBox?: string


}

export const Icon = (props: IconPropsType) => {
    return (
        

<svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`${IconsSprite}#${props.iconid}`}/>
</svg>

        

    );
};