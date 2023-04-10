import styled from "styled-components";

export const BaseLayoutMainStyle = styled.div<BaseLayoutMainStyle>`
  width: 100%;

  & > section {
    min-height: 100vh;
  }

  .logo-layout {
    display: flex;
    align-items: center;
    padding: 0 0 0 15px;
  }

  .logo-layout img {
    margin-right: 6px;
    position: relative;
    top: -2px;
  }

  .mobile-logo {
    display: flex;
    align-items: center;
    margin-left: 16px
  }

  .open-menu-btn {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .open-menu-btn {
      display: block;
      background-color: transparent;
      border: none;
      font-size: 20px;
    }
  }

  .logo-layout h2 {
    color: var(--primary-color);
  }

  .ant-menu {
    position: relative;
    height: 100%;
  }

  .first-li {
    margin-top: 10px !important;
  }

  .ant-menu .logout-btn {
    position: absolute !important;
    bottom: 80px;
    background-color: transparent !important;
  }

  @media screen and (max-width: 768px) {
    ${(props): any => {
      if (!props.isMobileBtn) {
        return `
          & .ant-layout-sider-children{
            left: -100% !important
          }
          `
      } else {
        return `
            & .ant-layout-sider-children{
            left: 0 !important
          }
          `
      }
    }}
  }

  @media screen and (max-width: 500px) {
    .ant-layout-content {
      margin: 20px 10px !important;
    }
  }
`

export const BaseLayoutMain = styled.main`
`;

interface BaseLayoutMainStyle {
    isMobileBtn: boolean
}