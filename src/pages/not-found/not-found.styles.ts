import styled from "styled-components";

export const NotFoundStyles = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 450px) {
    margin-top: 20px;
  }  
  & h3 {
    font-size: 2rem;
    
    @media screen and (max-width: 450px) {
      font-size: 1.6rem;
    }
  }

  & p {
    font-size: 1rem;
    color: rgb(99, 115, 129);
    max-width: 450px;
    padding-top: 10px;
    @media screen and (max-width: 450px) {
      font-size: .8rem;
    }
  }

  & svg {
    margin-top: 20px;
    width: 280px;
    height: 280px;

    @media screen and (max-width: 450px) {
      width: 200px;
      height: 200px;
    }
  }
`