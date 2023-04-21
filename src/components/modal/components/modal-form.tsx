import React, {useCallback, useEffect, useState} from "react"
import {Button, TextField} from "@mui/material";
import {Btn} from "../modal.styles";
import {toast} from "react-toastify";
import {ModalFormInterface} from "../../../interfaces/modal-form.interface";
import {VerifyCode} from "../../../pages";
import {InputChangeEvent} from "../../../types/event.types";
import {ChangePasswordApi, ChangePhoneNumberApi, GetUserApi, SellerEditApi} from "../../../api";

const ModalForm = ({type, setModalOpen, modalOpen, btnText, isAddCharacteristic}: ModalFormInterface) => {

    const [value, setValue] = useState<object | any>({
        name: "",
        email: "",
        phone: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const [phoneVerify, setPhoneVerify] = useState("")
    const [navigate, setNavigate] = useState(false)

    const handleInputChange = (e: InputChangeEvent) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data?.seller && localStorage.setItem("sellerId", userRes?.data.seller)

        if (type === "password") {
            if (value.newPassword === "" && value.oldPassword === "" && value.confirmPassword === "") {
                toast.warning(`please enter a ${type}`)
            } else if(value.newPassword !== value.confirmPassword) {
                toast.warning(`Must passwords same`)
            } else {
                try {
                    await ChangePasswordApi({old_password: value.oldPassword, new_password: value.newPassword})
                    toast.success('Password successfully changed!');
                    setModalOpen(false)
                } catch (error: any) {
                    toast.error('old password is wrong');
                    console.log(error.message)
                }
            }
        } else if (type === "email") {
            if (value[type] === "") {
                toast.warning(`please enter a ${type}`)
            } else {
                try {
                    await SellerEditApi(localStorage.getItem("sellerId"), {
                        email: value.email,
                    })
                    setModalOpen(false)
                    toast.success("Email is Changed")
                    setValue({
                        name: "",
                        email: "",
                        phone: "",
                        oldPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                    })
                } catch (e) {
                    toast.error("This email is already registered")
                }
            }
        } else if (type === "phone") {
            setPhoneVerify(value.phone)
            if (value[type] === "") {
                toast.warning(`please enter a ${type}`)
            } else {
                try {
                    await ChangePhoneNumberApi({phone: localStorage.getItem("oldPhone"), new_phone: value.phone})
                    setNavigate(true)
                } catch (e) {
                    toast.error("Error")
                    setNavigate(false)
                }
            }
        } else if (type === "name") {
            if (value[type] === "") {
                toast.warning(`please enter a ${type}`)
            } else {
                try {
                    await SellerEditApi(localStorage.getItem("sellerId"), {
                        first_name: value.name,
                    })
                    setModalOpen(false)
                    setValue({
                        name: "",
                        email: "",
                        phone: "",
                        oldPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                    })
                    toast.success("Name is Changed")
                } catch (e) {
                    toast.error("Error")
                }
            }
        }
    }

    const resetForm = useCallback(() => {
        setValue({
            name: "",
            email: "",
            phone: "",
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    }, [modalOpen]);

    useEffect(() => {
        resetForm();
    }, [resetForm, modalOpen]);

    return (
        <>
            {navigate ? (
                <div style={{padding: "20px"}}>
                    <VerifyCode newPhone={phoneVerify} setNavigate={setNavigate} setModalOpen={setModalOpen}
                                phone={localStorage.getItem("oldPhone")}
                                type={"change_phone"} navigateTo={"/seller/profile"} isToast isProfile/>
                </div>
            ) : (
                <form style={{padding: "20px"}} onSubmit={handleSubmit}>
                    {type === "password" ? (
                        <>
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label={"Your " + type}
                                type={type}
                                name={"oldPassword"}
                                onChange={handleInputChange}
                            />
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label={"New " + type}
                                type={type}
                                name={"newPassword"}
                                sx={{margin: "15px 0"}}
                                onChange={handleInputChange}
                            />
                            <TextField
                                fullWidth
                                id="outlined-required"
                                label={"Confirm " + type}
                                type={type}
                                name={"confirmPassword"}
                                onChange={handleInputChange}
                            />
                        </>
                    ) : (
                        <>
                            {!isAddCharacteristic && (
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label={btnText ? `Enter your ${type} name` : `Enter your ${type}`}
                                    type={"text"}
                                    name={type}
                                    onChange={handleInputChange}
                                    value={value[type]}
                                />
                            )}
                        </>
                    )}

                    {isAddCharacteristic && (
                        <h4>Add New</h4>
                    )}

                    <Btn>
                        <Button variant={"contained"} type={"submit"}>
                            {btnText ? btnText : "Save"}
                        </Button>
                    </Btn>
                </form>
            )}
        </>
    );
};

export default ModalForm