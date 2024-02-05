import React from "react"
import styled from "styled-components"


type FlexBoxPropsType = {
   direction?: string
   justify?: string
   align?: string
   wrap?: string

}

export const FlexBox = styled.div<FlexBoxPropsType> `
display: flex;
flex-direction: ${props => props.direction || "row"};
justify-content: ${props => props.justify || "flex-start"};
align-items: ${props => props.align || "stretch"};
flex-wrap: ${props => props.wrap || "nowrap"};
height: 100%;
    
`