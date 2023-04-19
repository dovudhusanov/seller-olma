import React, {useCallback, useEffect, useState} from "react"
import {GetUserApi} from "../../../api/profile/get-user-api";
import {SellerEditApi} from "../../../api/profile/seller-edit-api";
import {Button, TextField} from "@mui/material";
import {Btn} from "../modal.styles";
import {toast} from "react-toastify";
import {ModalFormInterface} from "../../../types/modal-form.interface";
import {ChangePhoneNumberApi} from "../../../api/profile/change-phone-number.api";
import {VerifyCode} from "../../../pages";

const ModalForm = ({type, setModalOpen, modalOpen}: ModalFormInterface) => {

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data?.seller && localStorage.setItem("sellerId", userRes?.data.seller)

        if (type === "password") {
            console.log("password")
        } else if (type === "email") {
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
        } else if (type === "phone") {
            setPhoneVerify(value.phone)
            try {
                await ChangePhoneNumberApi({phone: localStorage.getItem("oldPhone"), new_phone: value.phone})
                setNavigate(true)
            } catch (e) {
                toast.error("Error")
                setNavigate(false)
            }
        } else {
            if (value.name === "") {
                toast.warning("please enter a name")
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
                   <VerifyCode newPhone={phoneVerify} setNavigate={setNavigate} setModalOpen={setModalOpen} phone={localStorage.getItem("oldPhone")}
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
                        <TextField
                            fullWidth
                            id="outlined-required"
                            label={"Enter your " + type}
                            type={"text"}
                            name={type}
                            onChange={handleInputChange}
                            value={value[type]}
                        />
                    )}

                    <Btn>
                        <Button variant={"contained"} type={"submit"}>
                            Save
                        </Button>
                    </Btn>
                </form>
            )}
        </>
    );
};

export default ModalForm