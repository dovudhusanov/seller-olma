import axiosInstance from "../axios";

export const ResetPasswordApi = (phone: string | number) =>
    axiosInstance.post("/account/reset-password/", phone);