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

  :root {
    --primary-color: #097dea;
    //--primary-color: rgb(0, 171, 85);
    --warning-color: #e4981b;
    --hover-btn: rgb(3, 81, 171);
    //--hover-btn: rgb(0, 123, 85);
    --hover-btn-shadow: rgba(7, 141, 238, 0.24);
    //--hover-btn-shadow: rgba(0, 171, 85, 0.24) 0px 8px 16px 0px;
  }


  svg:not(:root) {
    overflow: hidden
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle
  }

  .MuiButton-root {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    box-sizing: border-box !important;
    -webkit-tap-highlight-color: transparent !important;
    outline: 0px !important;
    border: 0px !important;
    margin: 0px !important;
    cursor: pointer !important;
    user-select: none !important;
    vertical-align: middle !important;
    appearance: none !important;
    text-decoration: none !important;
    font-weight: 700 !important;
    line-height: 1.71429 !important;
    text-transform: capitalize !important;
    min-width: 64px !important;
    padding: 8px 22px !important;
    border-radius: 8px !important;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
    color: rgb(255, 255, 255) !important;
    background-color: var(--primary-color) !important;
    box-shadow: none !important;
    height: 45px !important;
    font-size: 15px !important;
  }

  .MuiButton-root:hover {
    box-shadow: var(--hover-btn-shadow) 0px 8px 16px 0px !important;
    background-color: var(--hover-btn) !important;
  }

  .ant-menu-item-selected {
    background-color: var(--primary-color) !important;
  }

  .ant-menu-item:not(.ant-menu-item-selected):active {
    background-color: var(--primary-color) !important;
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: var(--primary-color) !important;
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    color: #d32f2f !important;
  }

  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--primary-color) !important;
  }

  .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--primary-color) !important
  }

  .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f !important
  }

  .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f !important
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: var(--primary-color) !important;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline{
    border-color: #d32f2f !important
  }

  .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: var(--primary-color)!important;
  }

  .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline{
    border-color: #d32f2f !important
  }
  
  .MuiInputBase-root{
    border-radius: 8px!important;
  }

  .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: var(--primary-color) !important;
  }
`