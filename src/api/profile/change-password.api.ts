import axiosInstance from "../axios";

export const ChangePasswordApi = (password: any) =>
    axiosInstance.put("/account/change_password/", password, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });