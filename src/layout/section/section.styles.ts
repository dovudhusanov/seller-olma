import styled from "styled-components";

export interface SectionProps {
  readonly background?:string;
  readonly height?:string
}

export const SectionWrapper = styled.section<SectionProps>`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.background});
  height: ${(props)=>props.height};
  
  display: flex;
  align-items: center;
  justify-content: center;
`