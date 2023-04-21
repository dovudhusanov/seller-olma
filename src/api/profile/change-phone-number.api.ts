import axiosInstance from "../axios";

interface ChangePhoneNumberApiInterface {
    phone: string | null
    new_phone: string
}

export const ChangePhoneNumberApi = (phone: ChangePhoneNumberApiInterface) =>
    axiosInstance.patch("/account/change-phone/", phone, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`
        }
    });