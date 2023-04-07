import axiosInstance from "../axios";

export const SendResettedApi = (phone: any) =>
    axiosInstance.post("/account/send-resetted/", phone);