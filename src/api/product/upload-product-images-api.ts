import axiosInstance from "../axios";

export const UploadProductImagesApi = (images: any) =>
    axiosInstance.post(`/product/images/`, images, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });