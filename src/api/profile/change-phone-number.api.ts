import axiosInstance from "../axios";

export const ChangePhoneNumberApi = (phone: any) =>
    axiosInstance.patch("/account/change-phone/", phone, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });