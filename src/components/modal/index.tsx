import React, {useCallback, useEffect, useState} from 'react';
import ModalForm from "./components/modal-form";
import Modal from "./modal";
import {ModalFormInterface} from "../../interfaces/modal-form.interface";

function ModalMain({type, modalOpen, setModalOpen, btnText, isAddCharacteristic}: ModalFormInterface) {

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setModalOpen(false);
        }
    }, [modalOpen]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <Modal
            title={btnText ? `Add Your ${type}` : `Edit your ${type}`}
            elements={<ModalForm
                type={type}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                btnText={btnText}
                isAddCharacteristic={isAddCharacteristic}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
            />}
            isModalOpen={modalOpen}
            setModalOpen={setModalOpen}
        />
    );
}

export default ModalMain;