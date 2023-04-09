import {AuthLoginTypes} from "../constants/auth-login-type"

const initialState = {
    user: null,
    isFetching: false,
    error: false,
};

export const LoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AuthLoginTypes.LOGIN_START:
            return {
                ...state,
                isFetching: true,
                error: false,
            };
        case AuthLoginTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case AuthLoginTypes.ACCESS_TOKEN_REFRESHED:
            localStorage.setItem('access', action.payload.access);
            return {
                ...state,
            };
        case AuthLoginTypes.ACCESS_TOKEN_EXPIRED:
            localStorage.clear()
            return {
                ...state,
                user: null,
                isFetching: false,
                error: true,
            };
        case AuthLoginTypes.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
            };
        case AuthLoginTypes.LOGOUT:
            localStorage.clear()
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}