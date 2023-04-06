import styled, { css } from "styled-components";
import type { TypographyProps } from "./index";
import { colors } from "../../config/theme";

const size = {
  h1: css`
    font-size: 58px;
    line-height: 80px;
    letter-spacing: 0.2px;
  `,
  h2: css`
    font-size: 40px;
    line-height: 57px;
    letter-spacing: 0.2px;
  `,
  h3: css`
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.1px;
  `,
  h4: css`
    font-size: 24px;
    letter-spacing: 0.2px;
  `,
  h5: css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
  `,
  h6: css`
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  button: css`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  paragraph: css`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  link: css`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.2px;
  `,
  mobileMenu: css`
    font-size: 30px;
    line-height: 45px;
    letter-spacing: 0.2px;
  `,
  list: css`
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.2px;
  `,
};

export const weight = {
  w_800: 800,
  w_700: 700,
  w_600: 600,
  w_500: 500,
  w_400: 400,
};
export const Text = styled.p<TypographyProps>`
  color: ${(props) => colors[props.color]};
  ${(props) => size[props.textSize]};
  font-weight: ${(props) => weight[props.textWeight]};

  @media (max-width: 1399px) {
    ${(props) => props.responsive?.xxl && size[props.responsive?.xxl]};
  }
  @media (max-width: 1200px) {
    ${(props) => props.responsive?.xl && size[props.responsive?.xl]};
  }
  @media (max-width: 992px) {
    ${(props) => props.responsive?.md && size[props.responsive?.md]};
  }
  @media (max-width: 992px) {
    ${(props) => props.responsive?.sm && size[props.responsive?.sm]};
  }
  @media (max-width: 992px) {
    ${(props) => props.responsive?.xs && size[props.responsive?.xs]};
  }
`;
