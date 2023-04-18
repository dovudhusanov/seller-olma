import React from 'react';
import {ModalStyles, ModalInner, Element, Btn} from "./modal.styles";
import {Button} from "@mui/material";

interface ModalProps {
    elements: React.ReactNode
    isModalOpen: boolean
    setModalOpen: boolean | any
    title: string
}

function Modal({elements, isModalOpen, setModalOpen, title}: ModalProps) {
    return (
        <ModalStyles isModalOpen={isModalOpen}>
            <ModalInner isModalOpen={isModalOpen}>
                <i onClick={() => setModalOpen(false)} className="fa-solid fa-xmark"></i>
                <h3>{title}</h3>
                <Element>
                    {elements}
                </Element>
            </ModalInner>
        </ModalStyles>
    );
}

export default Modal;