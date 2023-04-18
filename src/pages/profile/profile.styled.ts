import styled from "styled-components";

export const ProfileStyles = styled.div`
  background-color: white;
  padding: 20px;
  height: 330px;
  max-width: 600px;
  width: 600px;
`

export const Form = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.43);
  
  & > span{
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    
    @media screen and (max-width: 370px) {
      font-size: 12px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & span{
      width: 110px;
      opacity: .54;
      
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
    
    & p{
      @media screen and (max-width: 370px) {
        font-size: 12px;
      }
    }
  }
`