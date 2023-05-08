import {booleanState, stringArrayState} from "../types/state.types";
import {ProductTypes} from "./product.interface";

export interface ModalFormInterface {
    type: string
    modalOpen: boolean
    setModalOpen: booleanState
    btnText?: string
    isAddCharacteristic?: boolean
    setSelectedOptions?: any
    selectedOptions?: any
    setIsEdited?: any
    setValue?: any
    setValuePr?: any
    value?: ProductTypes
    valuePr?: ProductTypes
}