import axiosInstance from "../axios";

export const SendResettedApi = (phone: string | number) =>
    axiosInstance.post("/account/send-resetted/", phone);