import React from "react";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
    return (

    <div>
        <a onClick={()=>{scroll.scrollToTop()}}>

        <Icon iconid={'code'} />

        </a>

    </div>

);
};