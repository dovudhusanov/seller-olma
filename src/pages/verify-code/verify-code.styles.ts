import styled, {keyframes} from "styled-components";

export const VerifyCodeStyles = {
    Form: styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 820px) {
        margin-top: 80px;
      }

      & > div {
        margin-top: 50px;
        
        & > div{
          & span{
           color: white!important;
          }
        }
      }

      @media screen and (max-width: 425px) {
        margin-top: 50px;
      }

      & h1 {
        color: #ffffff;
        max-width: 700px;
        text-align: center;
        font-size: 28px;
        padding: 0 10px;

        @media screen and (max-width: 600px) {
          font-size: 25px;
        }

        @media screen and (max-width: 425px) {
          font-size: 20px;
        }
      }

      & input {
        background: white;
        border: 0.1px solid grey;
        box-shadow: none;
        box-sizing: border-box;
        color: grey;
        font-size: 2.5em;
        height: 1.6em;
        margin: 0.12em;
        padding: 0.4em;
        text-align: center;
        transition: transform .1s ease-out;
        width: 1.6em !important;
        border-radius: 8px;
        outline: none;

        &:focus {
          box-shadow: 0 0 0px 3px var(--color-blue);
          border: none;
        }

        @media screen and (max-width: 600px) {
          height: 1em;
          width: 1em !important;
        }

        @media screen and (max-width: 600px) {
          height: .8em;
          width: .8em !important;
        }
      }

      & button {
        margin-top: 20px;
        border-radius: 8px;

        &.resend {
          background-color: transparent !important;
          color: #ffffff;
          width: initial;
          cursor: initial;
                    
          & > p {
            cursor: pointer;
          }
        }
      }
    `
}

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Count = styled.div`
  animation: ${scaleAnimation} 1s infinite ease-in-out;
  display: inline-block;
  padding-left: 10px;
`