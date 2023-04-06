import React from "react";
import { Text } from "./typography.style";

type FontSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "button"
  | "link"
  | "paragraph"
  | "mobileMenu"
  | "list";

export type TextColor =
  | "primary"
  | "backgroundGradient"
  | "text"
  | "secondText"
  | "lightText"
  | "darkBackground"
  | "hover"
  | "disabled"
  | "lightGray"
  | "alert"
  | "primaryOpacity";

type FontWeight = "w_800" | "w_700" | "w_600" | "w_500" | "w_400";

export interface TypographyProps extends React.HtmlHTMLAttributes<any> {
  readonly textSize: FontSize;
  readonly textWeight: FontWeight;
  readonly tag: any;
  readonly children: React.ReactNode;
  readonly color: TextColor;
  readonly responsive?: {
    xxl?: FontSize; // min-width: 1400px
    xl?: FontSize; // max-width: 1200px
    md?: FontSize; // max-width: 992px
    sm?: FontSize; // max-width: 768px
    xs?: FontSize; // max-width: 576px
  };
}

export const Typography = ({ tag, children, ...props }: TypographyProps) => (
  <Text as={tag} {...props}>
    {children}
  </Text>
);
