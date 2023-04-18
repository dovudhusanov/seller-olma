import React, {useState} from "react"
import {GetUserApi} from "../../../api/profile/get-user-api";
import {SellerEditApi} from "../../../api/profile/seller-edit-api";
import {Button, TextField} from "@mui/material";
import {Btn} from "../modal.styles";

const ModalForm = ({ type }: { type: string}) => {

    const [value, setValue] = useState<object | any>({
        name: "",
        email: "",
        phone: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data?.seller && localStorage.setItem("sellerId", userRes?.data.seller)

        if (type === "password") {
            console.log("password")
        } else if(type === "email") {
            await SellerEditApi(localStorage.getItem("sellerId"), {
                email: value.email,
            }).catch(e => {
                console.log(e, "Bu email royhatdan o'tib bolgan")
            })
        } else if(type === "phone") {
            console.log("phone")
        } else {
            await SellerEditApi(localStorage.getItem("sellerId"), {
                first_name: value.name,
            })
        }

    }

    return (
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
                />
            )}
            <Btn>
                <Button variant={"contained"} type={"submit"}>
                    Save
                </Button>
            </Btn>
        </form>
    );
};

export default ModalForm