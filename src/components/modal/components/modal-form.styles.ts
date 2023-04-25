import styled from "styled-components";

export const CharacteristicList = styled.ul`
  height: 300px;
  max-width: 415px;
  padding: 0 12px;
  overflow-y: auto;
  margin: 0 auto;

  & li {
    border-bottom: 1px solid rgba(128, 128, 128, 0.32);
  }
  
  & input{
    margin-left: 20px!important;
    display: block;
  }
`