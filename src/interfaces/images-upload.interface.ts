import React from "react";
import {stringArrayState} from "../types/state.types";

interface ImageData {
    file: File;
    preview: string;
    name: string
}

export interface ImageUploadPropsInterface {
    setImagePreviews: React.Dispatch<React.SetStateAction<JSX.Element[] | any>>;
    setImageIds: stringArrayState;
    imagePreviews: ImageData[]
}