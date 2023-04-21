import axiosInstance from "../axios";

export const GetSellerApi = (id: string | number | null) =>
    axiosInstance.get(`/seller/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });