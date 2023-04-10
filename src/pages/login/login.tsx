import React, {useState} from 'react';
import {Button} from "../../components";
import {Link, useNavigate} from "react-router-dom";
import "../signup/signup.css"
// @ts-ignore
import authImage from "../../assets/sign_.jpg"
import {useDispatch} from "react-redux";
import {LoginUser} from "../../action/auth-login-action";
import {Alert} from "@mui/material";

function Login() {

    const [form, setForm] = useState({
        phoneNumber: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<any>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const dispatch: any = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            await dispatch(LoginUser(form.phoneNumber, form.password));
            setIsLoading(false); // set isLoading back to false after dispatch is complete
            navigate("/")
        } catch (error) {
            setIsLoading(false); // set isLoading back to false in case of error
            console.error(error);
        }
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>Log In</p>
                    <form onSubmit={handleSubmit}>
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                id={"phoneNumber"}
                                name="phoneNumber"
                                type="tel"
                                placeholder="Phone Number"
                                onChange={handleChange}
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
                        <div className="auth__form-container_fields-content_button">
                            <Button background={"primary"} loading={isLoading && true} hover={"primary"}
                                    textWeight={"w_600"}>Log In</Button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p> Didn't have an account?
                            <Link to={"/seller/signup"}>
                                <span>Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={authImage} alt="sign in"/>
            </div>
        </div>
    )
}

// @ts-ignore
export default Login