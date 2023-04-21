import axiosInstance from "../axios";
import {VerifyCodeInterface} from "../../interfaces/verify-code.interface";

export const ResendVerifyCodeApi = (verifyCode: VerifyCodeInterface) =>
    axiosInstance.post("/account/resend-code/", verifyCode);