import axiosInstance from "../axios";

export const VerifyApi = (verifyCode: any) =>
    axiosInstance.post("/account/verify/", verifyCode);