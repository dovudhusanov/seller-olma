import axiosInstance from "../axios";

export const ResendVerifyCodeApi = (verifyCode: any) =>
    axiosInstance.post("/account/resend-code/", verifyCode);