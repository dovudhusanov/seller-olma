import React, {useCallback} from 'react';
import {ModalStyles, ModalInner} from "./modal.styles";
import {IconButton} from "@mui/material";

interface ModalProps {
    elements: React.ReactNode
    isModalOpen: boolean
    setModalOpen: boolean | any
    title: string
}

function Modal({elements, isModalOpen, setModalOpen, title}: ModalProps) {
    const handleClose = useCallback(() => {
        setModalOpen(false)
    }, [isModalOpen])

    return (
        <ModalStyles isModalOpen={isModalOpen} onClick={() => setModalOpen(false)}>
            <ModalInner isModalOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
                <IconButton onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                </IconButton>
                <h3>{title}</h3>
                {elements}
            </ModalInner>
        </ModalStyles>
    );
}

export default Modal;