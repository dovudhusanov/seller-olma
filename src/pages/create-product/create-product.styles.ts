import styled from "styled-components";

export const CreateProductStyles = styled.div`
  max-width: 1100px;
  width: 1100px;
  background-color: white;
  padding: 20px;

  @media screen and (max-width: 425px) {
    padding: 5px;
  }

  & form {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 1120px) {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const LeftForm = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  z-index: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin-right: 20px;

  @media screen and (max-width: 425px) {
    padding: 10px;
    box-shadow: none;
  }
  
  & > div {
    & > div {
      border-radius: 8px !important;
    }
  }

  @media screen and (max-width: 1120px) {
    margin-right: 0;
  } 
  
  @media screen and (max-width: 940px) {
    width: 100% !important;
    max-width: 100% !important;
  }
`

export const Right = styled.div`
  max-width: 400px;
  width: 400px;
  
  & > button{
    width: 100%;
    margin-top: 20px!important;
  }
  
  @media screen and (max-width: 1120px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 650px;
    width: 650px;
    align-items: center;
  }

  @media screen and (max-width: 940px) {
    width: 100% !important;
    max-width: 100% !important;
  }
`

export const RightForm = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  border-radius: 16px;
  z-index: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1120px) {
    margin-top: 30px;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 940px) {
    width: 100% !important;
    max-width: 100% !important;
  }

  @media screen and (max-width: 425px) {
    padding: 10px;
    box-shadow: none;
  }

  & > div {
    & > div {
      border-radius: 8px !important;
    }
  }
`

export const PriceInput = styled.div`
  position: relative;

  & > div {
    & > div{
      padding-left: 14px;
      border-radius: 8px!important;
    }
  }
`

export const IconDollar = styled.div`
  position: absolute;
  top: 13px;
  left: 10px;
  font-size: 20px;
  color: grey;
`

export const SelectImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  padding: 10px 30px;
  border-radius: 8px;
  transition: padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgb(244, 246, 248);
  border: 1px dashed rgba(145, 158, 171, 0.32);

  @media screen and (max-width: 590px) {
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    padding: 30px;
  }

  &:hover{
    opacity: .7;
  }
  
  & svg{
    width: 170px;
    height: 170px;
    margin-right: 20px;

    @media screen and (max-width: 590px) {
      width: 140px;
      height: 140px;
    }

    @media screen and (max-width: 425px) {
     display: none;
    }

  }
  
  & div{
    max-width: 400px;
  }
  
  & input{
    display: none;
  }
`

export const SelectedImages = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;

  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid rgba(128, 128, 128, 0.29);
  }

  & div {
    position: relative;

    & button {
      position: absolute;
      right: 7px;
      top: 7px;
      width: 22px;
      height: 22px;
      background-color: rgba(255, 255, 255, 0.11);

      &:hover {
        background-color: rgba(255, 255, 255, 0.06);
      }

      & i {
        color: grey;
        font-size: 15px;
      }
    }
  }
`

export const SelectedImagesButton = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 15px;

  & button {
    font-size: 12px !important;
    height: 32px !important;
    padding: 10px !important;
    font-weight: 800 !important;

    &:nth-child(1) {
      border: 1px solid rgba(33, 43, 54, 0.25) !important;
      background-color: rgba(145, 158, 171, 0.08) !important;
      color: #0c0916 !important;
      margin-right: 10px!important;

      &:hover {
        border: 1px solid rgb(33, 43, 54) !important;
        box-shadow: none !important;
      }
    }
  }
`