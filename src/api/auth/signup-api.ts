import axiosInstance from "../axios";

export const SignupApi = (userInfo: object) =>
    axiosInstance.post("/account/signup/", userInfo);