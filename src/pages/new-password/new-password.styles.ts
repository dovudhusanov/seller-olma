import styled from "styled-components";

export const NewPasswordStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  width: 100%;
  
  @media screen and (max-width: 820px) {
    margin-top: 40px;
  }

  & form {
    max-width: 400px;
    width: 400px;
    & h1 {
      color: var(--color-black);
      font-size: 30px;
    }

    & p {
      color: grey;
      margin: 10px 0 20px 0;
      font-size: 15px;
    }

    & div {
      display: flex;
      align-items: start;
      flex-direction: column;
      width: 100%;
    }

    & button {
      width: 100%;
      margin-top: 10px;
    }
  }
`