import axiosInstance from "../axios";

export const SignupApi = (userInfo: any) =>
    axiosInstance.post("/account/signup/", userInfo);