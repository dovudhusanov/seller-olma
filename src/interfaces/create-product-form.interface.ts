import React from "react";
import {ProductTypes} from "../types/product.types";

export interface CreateProductFormInterface {
    errors: ProductTypes | any
    touched: ProductTypes | any;
    handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    values: ProductTypes
}