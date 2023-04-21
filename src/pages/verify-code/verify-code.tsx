import React, {useEffect, useState} from 'react';
import OtpInput from 'react18-input-otp';
import {VerifyApi, ResendVerifyCodeApi} from "../../api";
import {VerifyCodeStyles, Count} from "./verify-code.styles";
import {ChangeTitle} from "../../middleware";
import {signFailure, signSuccess} from "../../action/signup-action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {NewPassword} from "../index";
import {Button} from "@mui/material";
import {toast} from "react-toastify";
// import {booleanState} from "../../types/state.types";

type booleanState = React.Dispatch<React.SetStateAction<boolean>>;

interface VerifyCodeProps {
    phone: string | number | any
    type: string
    navigateTo: string
    newPhone?: number | string
    isToast?: boolean
    isProfile?: boolean
    setModalOpen?: booleanState | any
    setNavigate?: booleanState | any
}

export default function VerifyCode({phone, type, navigateTo, newPhone, isToast, isProfile, setModalOpen, setNavigate}: VerifyCodeProps) {

    ChangeTitle("Verify your phone number")

    localStorage.setItem("phone_number", phone)

    const [verified, setVerified] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [otp, setOtp] = useState<string>('');

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleChange = (enteredOtp: string) => {
        setOtp(enteredOtp);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await VerifyApi({phone: type === "change_phone" ? phone : "+998" + phone, new_phone: newPhone ?  newPhone : null, code: otp, type: type})
            dispatch(signSuccess(response.data))
            navigate(navigateTo)
            setVerified(true)
            localStorage.removeItem("oldPhone")
            setIsLoading(false)
            setModalOpen(false)
            isToast && toast.success("Phone number successfully changed")
            setNavigate(false)
        } catch (error) {
            setIsLoading(false)
            setVerified(false)
            dispatch(signFailure(error))
            isToast && toast.success("")
        }
    }

    const [countdown, setCountdown] = useState<number>(60);

    useEffect(() => {
        let intervalId: null | any = null;
        if (countdown > 0) {
            intervalId = setInterval(() => {
                setCountdown(countdown - 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [countdown]);

    const handleResendCode = async (e: React.FormEvent) => {
        e.preventDefault()
        setCountdown(60);
        try {
            const response = await ResendVerifyCodeApi({phone: type === "change_phone" ? phone : "+998" + phone, type: "resend"})
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <VerifyCodeStyles.Form onSubmit={handleSubmit} profile={isProfile}>
                <h1>Confirm the SMS code received on your phone number in <Count>{countdown}s</Count></h1>
                <OtpInput
                    id="otp-input"
                    autoComplete="off"
                    onChange={handleChange}
                    shouldAutoFocus
                    value={otp}
                    separator={<span>-</span>}
                    numInputs={6}
                />
                <Button className="resend">{countdown === 0 && (
                        <p onClick={handleResendCode}>
                            <i className='fa-solid fa-repeat'></i> Resend Code
                        </p>
                    )}</Button>
                <Button type={"submit"}>Send</Button>
            </VerifyCodeStyles.Form>
            {verified && type === "password_reset" &&
                <NewPassword/>
            }
        </>
    )
}
