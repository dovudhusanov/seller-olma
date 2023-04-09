import axiosInstance from "../axios";

export const LogoutApi = (refresh: any) =>
    axiosInstance.post("/account/logout/", refresh);