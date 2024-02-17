import React from "react";
import styled from "styled-components";
import { theme } from "../../../Styles/Theme";
import { font } from "../../../Styles/Common";

export const SectionTitle = styled.h2 `

${font({family: "'Poppins', sans-serif", weight: 600, Fmax: 36, Fmin: 30})}

text-align: center;
letter-spacing: 5px;
margin-bottom: 90px; 

position: relative;



&::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);

    @media ${theme.media.mobile} {
        bottom: -24px;
    }
}
    

`

