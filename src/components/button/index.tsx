import {ButtonMain} from "./button.style";
import React from "react";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    readonly textWeight: "w_800" | "w_700" | "w_600" | "w_500" | "w_400";
    readonly background:
        "primary" |
        "dark"
    readonly hover: | "primary" | "dark";
    readonly width?: string;
    readonly children: React.ReactNode;
}

export const Button = ({children, ...props}: ButtonProps) => (
    <ButtonMain {...props}>{children}</ButtonMain>
);
