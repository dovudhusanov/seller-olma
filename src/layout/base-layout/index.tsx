import React from "react";

import {
  BaseLayoutMainStyle,
  BaseLayoutMain
} from "./base-layout.styles";

interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <BaseLayoutMainStyle>
      <BaseLayoutMain>
          {children}
      </BaseLayoutMain>
    </BaseLayoutMainStyle>
  );
}
