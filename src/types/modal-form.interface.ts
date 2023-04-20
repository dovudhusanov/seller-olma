import {booleanState} from "./state.types";

export interface ModalFormInterface {
    type: string
    modalOpen: boolean
    setModalOpen: booleanState
    btnText?: string
    isAddCharacteristic?: boolean
}