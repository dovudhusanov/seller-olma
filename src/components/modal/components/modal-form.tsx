import React, {useCallback, useEffect, useState} from "react"
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {Btn} from "../modal.styles";
import {toast} from "react-toastify";
import {ModalFormInterface} from "../../../interfaces/modal-form.interface";
import {VerifyCode} from "../../../pages";
import {InputChangeEvent} from "../../../types/event.types";
import {ChangePasswordApi, ChangePhoneNumberApi, GetUserApi, SellerEditApi} from "../../../api";
import {CharacteristicList} from "./modal-form.styles";
import {ScrollTop} from "../../../middleware";

const ModalForm = ({
                       type,
                       setModalOpen,
                       modalOpen,
                       btnText,
                       isAddCharacteristic,
                       setSelectedOptions,
                       selectedOptions,
                       setIsEdited, setValuePr, valuePr
                   }: ModalFormInterface) => {

    ScrollTop();

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

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const option: any = event.target.value;
        if (event.target.checked) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions(selectedOptions.filter((selectedOption: string[]) => selectedOption !== option));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data?.seller && localStorage.setItem("sellerId", userRes?.data.seller)

        if (type === "password") {
            if (value.newPassword === "" && value.oldPassword === "" && value.confirmPassword === "") {
                toast.warning(`please enter a ${type}`)
            } else if (value.newPassword !== value.confirmPassword) {
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
                    setIsEdited(true)
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
                    setIsEdited(true)
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
                    setIsEdited(true)
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
        } else { // @ts-ignore
            if (type && isAddCharacteristic) {
                try {
                    const attributeValue = type.replace(/-/g, " "); // Remove hyphens from the type value
                    const newAttribute = {
                        value: attributeValue,
                        attribute: selectedOptions
                    };

                    // @ts-ignore
                    const newAttributes = [...valuePr.attributes, newAttribute];

                    setValuePr({
                        ...valuePr,
                        attributes: newAttributes
                    });

                    setModalOpen(false);
                } catch (e) {
                    console.log(e);
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

    // Determine which options to show based on the characteristic type
    let optionsToDisplay: any = [];
    switch (type) {
        case "color":
            optionsToDisplay = ["Red", "Blue", "Green", "White", "Yellow", "Black", "Cyan", "Orange", "Grey"];
            break;
        case "clothes-size":
            optionsToDisplay = ["XXXS", "XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL"];
            break;
        case "men-shoe-size":
            optionsToDisplay = ["37", "38", "39", "40", "42", "43", "44", "45", "46", "47"];
            break;
        case "women-shoe-size":
            optionsToDisplay = ["35", "36", "37", "38", "39", "40", "42", "43", "44"];
            break;
        case "children-shoe-size":
            optionsToDisplay = ["15", "16", "17", "18", "20", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"];
            break;
        default:
            optionsToDisplay = [];
            break;
    }
    console.log(valuePr)

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

                    {optionsToDisplay.length > 0 && (
                        <CharacteristicList>
                            {optionsToDisplay.map((option: any, index: any) => (
                                <li>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={handleOptionChange}
                                                checked={selectedOptions.includes(option)}
                                                value={option}
                                            />}
                                        label={option}
                                    />
                                </li>
                            ))}
                        </CharacteristicList>
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