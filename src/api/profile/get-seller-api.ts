import axiosInstance from "../axios";

export const GetSellerApi = (id: number | string | any) =>
    axiosInstance.get(`/account/user/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });