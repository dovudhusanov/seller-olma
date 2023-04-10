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
`