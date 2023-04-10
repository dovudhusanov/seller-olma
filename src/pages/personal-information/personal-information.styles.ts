import styled from "styled-components";

export const PersonalInformationStyles = styled.div`
  max-width: 1000px;
  width: 1000px;
  background-color: white;
  padding: 30px 40px;

  & .form-personal-info {
    margin-top: 20px;

    & > div {
      max-width: 32%;
      flex-grow: 1;

      @media screen and (max-width: 1012px) {
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 425px) {
    & button{
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
  }

  & .with-bio {
    & > div {
      width: 50%;
      max-width: 49%;
      @media screen and (max-width: 1110px) {
        width: 100%;
        max-width: 100%;
      }

      &:nth-child(3) {
        width: 100%;
        max-width: 100% !important;
      }
    }
  }
`

export const Warning = styled.div`
  background: rgba(251,187,81,.1);
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
    & span{
      color: var(--warning-color);
      padding-left: 10px;
      font-size: 15px;
    }
`

export const FormStyle = styled.form`
 
`

