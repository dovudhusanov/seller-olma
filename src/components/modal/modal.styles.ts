import styled from "styled-components";

export const ModalStyles = styled.div<ModalProps>`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.29);
  transition: 0.2s ease;
  ${(props: any): any => {
    if (props.isModalOpen) {
      return `
            visibility: visible;
          `
    }
  }}
`

export const ModalInner = styled.div<ModalProps>`
  visibility: hidden;
  opacity: 0;
  transform: scale(0.1);
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 500px;
  margin: 0 10px;
  transition: 0.3s ease;
  position: relative;

  ${(props: any): any => {
    if (props.isModalOpen) {
      return `
            visibility: visible;
            opacity: 1;
            transform: scale(1);
          `
    }
  }}
  & > button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  & h3 {
    font-weight: 400;
    font-size: 18px;
    color: #646464;
    padding: 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.42);
  }
`

export const Btn = styled.div`
  width: 100%;
  text-align: right;
  padding-top: 20px;
`

interface ModalProps {
    isModalOpen: boolean
}
