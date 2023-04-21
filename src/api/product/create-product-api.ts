import axiosInstance from "../axios";
import {ProductTypes} from "../../interfaces/product.interface";

export const CreateProductApi = (productDetails: ProductTypes) =>
    axiosInstance.post(`/product/`, productDetails, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });