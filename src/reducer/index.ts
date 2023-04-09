import {combineReducers} from "redux";
import {LoginReducer} from "./login-reducer";
import {SignupReducer} from "./signup-reducer"
export const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
    SignupReducer: SignupReducer,
})