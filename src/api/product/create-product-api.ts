import axiosInstance from "../axios";

export const CreateProductApi = (productDetails: any) =>
    axiosInstance.post(`/product/`, productDetails, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });