import axiosInstance from "../axios";

interface ChangePasswordApiInterface {
    old_password: string
    new_password: string
}

export const ChangePasswordApi = (password: ChangePasswordApiInterface) =>
    axiosInstance.put("/account/change_password/", password, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });