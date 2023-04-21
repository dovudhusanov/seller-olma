import axiosInstance from "../axios";

export const AccessTokenRefreshedApi = (refresh: string | null) =>
    axiosInstance.post("/account/token/refresh/", {
        refresh
    });