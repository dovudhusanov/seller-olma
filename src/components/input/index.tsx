import React from "react";

import {
    IconStyles,
    InputBox,
    InputElement,
    LabelStyles,
} from "./input.styles";

interface InputProps extends React.AllHTMLAttributes<HTMLElement> {
    readonly as?: any;
    readonly type?: string;
    readonly icon?: React.ReactNode;
    readonly iconPosition?: "left" | "right" | "no-icons";
    readonly field?: any;
    handleShowPassword?: () => void;
}

export const Input = ({
                          as = "input",
                          type,
                          icon,
                          iconPosition = "no-icons",
                          label,
                          name,
                          id,
                          className,
                          field,
                          handleShowPassword,
                          ...props
                      }: InputProps) => {
    return (
        <InputBox className={className} type={type}>
            {label && (
                <LabelStyles type={type} htmlFor={id}>
                    {label}
                </LabelStyles>
            )}
            <InputElement
                type={type}
                as={as}
                name={name}
                id={id}
                {...field}
                {...props}
                icon={icon}
                iconPosition={iconPosition}
            />
            <IconStyles
                label={label}
                onClick={handleShowPassword}
                iconPosition={iconPosition}
            >
                {icon}
            </IconStyles>
        </InputBox>
    );
};
