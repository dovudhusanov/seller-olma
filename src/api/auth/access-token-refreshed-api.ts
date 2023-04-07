import axiosInstance from "../axios";

export const AccessTokenRefreshedApi = (refresh: string | any) =>
    axiosInstance.post("/account/token/refresh/", {
        refresh
    });