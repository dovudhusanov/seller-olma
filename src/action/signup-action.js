import {SignupType} from "../constants/signup-type";

export const signStart = () => ({
    type: SignupType.SIGNUP_START,
});

export const signSuccess = (user) => ({
    type: SignupType.SIGNUP_SUCCESS,
    payload: user
});

export const signFailure = (error) => ({
    type: SignupType.SIGNUP_FAILURE,
    payload: error
});