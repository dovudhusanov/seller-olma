import axios from "axios";

const api_url = process.env.API_URL

const axiosInstance = axios.create({
    baseURL: "https://abdusattor0707.pythonanywhere.com",
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access');

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                localStorage.clear()
                window.location.href  = "/"
                return axiosInstance(originalRequest);
            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;