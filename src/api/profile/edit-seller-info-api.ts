import axiosInstance from "../axios";

export const EditSellerInfoApi = (id: any, sellerInfo: any) =>
    axiosInstance.post(`/seller/${id}/`, sellerInfo, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });