import axiosInstance from "../axios";

export const GetUserApi = (id: string | number | null) =>
    axiosInstance.get(`/account/user/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });