import {AuthLoginTypes} from "../constants/auth-login-type";
import {AccessTokenRefreshedApi, GetUserApi, LoginApi} from "../api";

export const loginStart = () => ({
    type: AuthLoginTypes.LOGIN_START,
});

export const loginSuccess = (user: object) => ({
    type: AuthLoginTypes.LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = () => ({
    type: AuthLoginTypes.LOGIN_FAILURE,
});

export const logout = () => ({
    type: AuthLoginTypes.LOGOUT,
});

const refreshTokenSuccess = (accessToken: any) => ({
    type: AuthLoginTypes.ACCESS_TOKEN_REFRESHED,
    payload: { access: accessToken },
});

const tokenExpired = () => ({
    type: AuthLoginTypes.ACCESS_TOKEN_EXPIRED,
});

export const LoginUser = (phoneNumber: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(loginStart());
        try {
            const response = await LoginApi({phone: "+998" + phoneNumber, password});

            dispatch(loginSuccess(response.data.user));

            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem("userId", response.data.id)
            const sellerRes = await GetUserApi(localStorage.getItem("userId"))
            sellerRes.data[0].seller && localStorage.setItem("sellerId", sellerRes.data[0].seller)
            // window.location.reload()
            window.location.href = '/seller/personal-information';
        } catch (error) {
            dispatch(loginFailure());
        }
    };
};

export const refreshAccessToken = () => {
    return async (dispatch: any) => {
        try {
            const response = await AccessTokenRefreshedApi(localStorage.getItem('refresh'))

            dispatch(refreshTokenSuccess(response.data.access));

            localStorage.setItem('access', response.data.access);
        } catch (error) {
            dispatch(tokenExpired());
        }
    };
};