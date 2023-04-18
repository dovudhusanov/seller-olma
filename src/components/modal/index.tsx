import React, {useState} from 'react';
import ModalForm from "./components/modal-form";
import Modal from "./modal";

interface ModalMainProps {
    modalType: string
    modalOpen: boolean
    setModalOpen: any
}

function ModalMain({modalType, modalOpen, setModalOpen}: ModalMainProps) {

    window.addEventListener("keydown", (e: any) => {
        if(e.key === "Escape") {
            setModalOpen(false)
        }
    })

    return (
        <Modal
            title={`Edit your ${modalType}`}
            elements={<ModalForm type={modalType}/>}
            isModalOpen={modalOpen}
            setModalOpen={setModalOpen}
        />
    );
}

export default ModalMain;