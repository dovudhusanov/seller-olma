import {ButtonMain, Spinner} from "./button.style";
import React from "react";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    readonly textWeight: "w_800" | "w_700" | "w_600" | "w_500" | "w_400";
    readonly background:
        "primary" |
        "dark"
    readonly hover: | "primary" | "dark";
    readonly width?: string;
    readonly type?: | "submit" | "button";
    readonly loading?: boolean | any
    readonly children: React.ReactNode;
}

export const Button = ({children, loading, ...props}: ButtonProps) => (
    <ButtonMain {...props}> {loading ? <div><Spinner /></div> : children}</ButtonMain>
);
