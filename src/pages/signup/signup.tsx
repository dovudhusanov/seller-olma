import React, {useState} from 'react';
import "./signup.css"
import {Button} from "../../components";
import {Link} from "react-router-dom";
// @ts-ignore
import authImage from "../../assets/sign_.jpg"
import {useDispatch} from "react-redux";
import {VerifyCode} from "../index";
import {SignupApi} from "../../api";
import {signFailure, signStart} from "../../action/signup-action";

function Signup() {

    const [form, setForm] = useState({
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const [isPhoneNumberSubmitted, setIsPhoneNumberSubmitted] = useState(false);
    const [phoneVerify, setPhoneVerify] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPhoneVerify(form.phoneNumber)
        dispatch(signStart())
        try {
            setIsLoading(true)
            await SignupApi({phone: "+998" + form.phoneNumber, password: form.password})
            setIsPhoneNumberSubmitted(true)
            setIsLoading(false)
        } catch (error: any) {
            console.log(error)
            dispatch(signFailure(error.message))
            throw error
            setIsPhoneNumberSubmitted(false)
        }
    }

    return (
        <div className="auth__form-container">
            {!isPhoneNumberSubmitted && (
                <div className="auth__form-container_fields">
                    <div className="auth__form-container_fields-content">
                        <p>Sign Up</p>
                        <form onSubmit={handleSubmit}>
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    id={"phoneNumber"}
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input
                                    id={"password"}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    id={"confirmPassword"}
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="auth__form-container_fields-content_button">
                                <Button background={"primary"} hover={"primary"}
                                        textWeight={"w_600"} loading={isLoading && true}>Sign Up</Button>
                            </div>
                        </form>
                        <div className="auth__form-container_fields-account">
                            <p> Already have an account?
                                <Link to={"/seller/login"}>
                                    <span>Log In</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {isPhoneNumberSubmitted && (
                <>
                    <div className="auth__form-container_fields">
                        <VerifyCode phone={phoneVerify} type={"register"} navigateTo={"/login"}/>
                    </div>
                </>
            )}
            <div className="auth__form-container_image">
                <img src={authImage} alt="sign in"/>
            </div>
        </div>
    )
}

// @ts-ignore
export default Signup