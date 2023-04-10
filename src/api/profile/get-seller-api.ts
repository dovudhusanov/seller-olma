import axiosInstance from "../axios";

export const GetSellerApi = (id: number | string | any) =>
    axiosInstance.get(`/seller/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });