import axiosInstance from "../axios";
import {VerifyCodeInterface} from "../../interfaces/verify-code.interface";

interface VerifyApiProps extends VerifyCodeInterface{
    new_phone: string | number | null
    code: string | number
}

export const VerifyApi = (verifyCode: VerifyApiProps) =>
    axiosInstance.post("/account/verify/", verifyCode);