import React from 'react';
import {ModalStyles, ModalInner, Btn} from "./modal.styles";
import {Button, IconButton} from "@mui/material";

interface ModalProps {
    elements: React.ReactNode
    isModalOpen: boolean
    setModalOpen: boolean | any
    title: string
}

function Modal({elements, isModalOpen, setModalOpen, title}: ModalProps) {
    return (
        <ModalStyles isModalOpen={isModalOpen} onClick={() => setModalOpen(false)}>
            <ModalInner isModalOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
                <IconButton onClick={() => setModalOpen(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </IconButton>
                <h3>{title}</h3>
                {elements}
            </ModalInner>
        </ModalStyles>
    );
}

export default Modal;