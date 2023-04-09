import {createGlobalStyle} from "styled-components";

export const GlobalStyles =  createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    scroll-behavior: smooth;
  }
  
  :root{
    --primary-color: #097dea;
    --warning-color: #e4981b
  }


  svg:not(:root) {
    overflow: hidden
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle
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

  .logo-layout h2{
    color: var(--primary-color);
  }
  
  .ant-menu{
    position: relative;
    height: 100%;
  }
  
  .first-li{
    margin-top: 10px!important;
  }

  .ant-menu .logout-btn{
    position: absolute!important;
    bottom: 80px;
    background-color: transparent!important;
  }
`