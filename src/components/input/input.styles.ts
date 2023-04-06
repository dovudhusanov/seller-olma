import styled from "styled-components";

interface InputStyleProps {
    readonly type?: string;
    readonly label?: string;
    readonly iconPosition?: string;
    readonly icon?: any;
}

export const InputBox = styled.div<InputStyleProps>`
  position: relative;
  ${({type}) => {
    if (type === "checkbox" || type === "radio") {
      return `
      display:flex;
      align-items:center;
      gap:15px;
      justify-content:start;
      flex-direction:row-reverse;
    `;
    }
  }}
`;

export const LabelStyles = styled.label<InputStyleProps>`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 24px;
  display: block;
  ${({type}) => {
    if (type === "checkbox" || type === "radio") {
      return `
      font-size: 14px;
      line-height: 28px;  
      font-weight:600;
      color: #737373;
      margin-bottom: 0;
      letter-spacing: 0.2px;
      cursor: pointer;
      `;
    }
  }}
`;

export const InputElement = styled.input<InputStyleProps>`
  width: 100%;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  outline: none;
  padding: 21px 25px;
  font-size: 15px;
  line-height: 16px;

  ${({icon, iconPosition}) => {
    if (icon && iconPosition === "left") {
      return `
        padding:21px 25px 21px 35px;
      `;
    } else if (icon && iconPosition === "right") {
      return `
        padding: 21px 35px 21px 25px;
      `;
    }
  }}
  &:focus {
    border: 2px solid #00AC6A;
  }

  ${({type}) => {
    if (type === "checkbox") {
      return `
        width:20px;
        height:20px;
        padding:0;
        cursor:pointer;
      `;
    }
    if (type === "radio") {
      return `
        width:20px;
        height:20px;
        padding:0;
        cursor:pointer;
        appearance: none;
        border-radius:50%;
        &:checked {
          background: #fff;
          border: 4px solid #2091f9;
          border-radius:50%;

        }
        &:hover{
          border:4px solid #2091f9;
          background:color:#fff;  
        }
         &::after {
            border: 4px solid #2091f9;
            background-color:#2091f9;
          }
      `;
    }
  }}
`;

export const IconStyles = styled.span<InputStyleProps>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 69%;
  right: 10px;
  transform: translate(0, -69%);
  cursor: pointer;
  ${({iconPosition}) => {
    if (iconPosition === "left") {
      return `
      right:auto;
      left: 20px;
      transform: translate(0, -69%);
    `;
    }
  }}
  ${({label, iconPosition}) => {
    if (!label && iconPosition === "right") {
      return `
      display:flex;
      align-items:center;
      position:absolute;
      top:50%;
      right:20px;
      transform:translate(0,-50%);
    `;
    } else if (!label && iconPosition === "left") {
      return `
        top:50%;
        left:10px;
        transform:translate(0,-50%)`;
    }
  }};
`;
