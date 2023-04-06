import React from "react";
interface ContainerProps {
  readonly children: React.ReactNode;
}
export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
