import axiosInstance from "../axios";

export const LoginApi = (userInfo: object) =>
    axiosInstance.post("/account/login/", userInfo);