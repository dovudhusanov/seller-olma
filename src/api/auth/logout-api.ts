import axiosInstance from "../axios";

export const LogoutApi = (refresh: string) =>
    axiosInstance.post("/account/logout/", refresh);