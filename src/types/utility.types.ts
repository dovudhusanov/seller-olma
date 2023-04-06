import React from "react";

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  stroke?: string;
  active?: boolean;
}
export type IconType = React.FC<IconBaseProps>;
