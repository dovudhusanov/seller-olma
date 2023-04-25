import {booleanState, stringArrayState} from "../types/state.types";

export interface ModalFormInterface {
    type: string
    modalOpen: boolean
    setModalOpen: booleanState
    btnText?: string
    isAddCharacteristic?: boolean
    setSelectedOptions?: any
    selectedOptions?: any
}