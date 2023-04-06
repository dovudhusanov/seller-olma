import React from "react";
import {SectionWrapper} from './section.styles'
interface SectionProps extends React.AllHTMLAttributes<HTMLElement> {
    readonly children: React.ReactNode[] | React.ReactNode;
    readonly background?: string;
    readonly height?: string;
}
export const Section = ({children, height = "100vh", ...props}: SectionProps) => {
    return (
        <SectionWrapper
            background={props.background}
            height={height}
        >{children}
        </SectionWrapper>
    )
}