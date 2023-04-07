import {SignupType} from "../constants/signup-type";

const initialState = {
    isSigningUp: false,
    signupError: null,
};

export function SignupReducer(state = initialState, action) {
    switch (action.type) {
        case SignupType.SIGNUP_START:
            return {
                ...state,
                isSigningUp: true,
            };
        case SignupType.SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                signupError: null,
            };
        case SignupType.SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                signupError: action.payload,
            };
        default:
            return state;
    }
}