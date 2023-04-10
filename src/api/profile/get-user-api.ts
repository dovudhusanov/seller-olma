import axiosInstance from "../axios";

export const GetUserApi = (id: any) =>
    axiosInstance.get(`/account/user/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });