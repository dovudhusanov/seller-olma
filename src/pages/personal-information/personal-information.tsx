import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {PersonalInformationStyles, Warning} from "./personal-information.styles";
import {WarningIcon} from "../../icons";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {CreateSellerApi} from "../../api/profile/create-seller-api";
import {GetUserApi} from "../../api/profile/get-user-api";
import {GetSellerApi} from "../../api/profile/get-seller-api";
import {SellerEditApi} from "../../api/profile/seller-edit-api";
import {SellerTypes} from "../../types/seller.types";
import {ChangeTitle, ScrollTop} from "../../middleware";

const schema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    surname: yup.string().required('Surname is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    inn: yup.number().required('INN is required').test('inn', 'INN must be exactly 8 digits', (val: any) => val && val.toString().length === 8),
    bank_mfo: yup.number().required('Bank MFO is required').test('bank_mfo', 'Bank MFO must be exactly 5 digits', (val: any) => val && val.toString().length === 5),
    bank_account: yup.string().required('Bank account is required'),
    shop_name: yup.string().required('Shop name is required'),
    address: yup.string().required('Address is required'),
    bio: yup.string().required('Bio is required'),
});

function PersonalInformation() {

    ScrollTop()
    ChangeTitle("Personal Information")

    const [userData, setUserData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function GetUser(): Promise<void> {
        setIsLoading(true)
        try {
            const response = await GetUserApi(localStorage.getItem("userId"));
            setUserData(response?.data);
            if (response?.data?.seller) {
                localStorage.setItem("sellerId", response.data.seller);
            }
        } catch (error) {
            console.error(error);
        }

        try {
            const res = await GetSellerApi(localStorage.getItem("sellerId"))
            setValue({
                first_name: res?.data?.first_name,
                last_name: res?.data?.last_name,
                email: res?.data?.email,
                surname: res?.data?.surname,
                address: res?.data?.address,
                inn: res?.data?.inn,
                bio: res?.data?.bio,
                bank_account: res?.data?.bank_account,
                bank_mfo: res?.data?.bank_mfo,
                shop_name: res.data?.shop_name,
                shop_picture: res?.data?.image
            })
        } catch (error) {
            setIsLoading(true)
            console.log(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        GetUser()
    }, [])

    const [value, setValue] = useState<SellerTypes>({
        first_name: '',
        last_name: '',
        surname: '',
        email: '',
        inn: '',
        bank_mfo: '',
        bank_account: '',
        shop_name: '',
        address: '',
        bio: '',
        shop_picture: [0]
    })

    const handleSubmit = async (values: SellerTypes) => {
        const {first_name, last_name, shop_name, bank_account, bank_mfo, bio, inn, address, surname, email} = values
        if (userData.seller) {
            const userRes = await GetUserApi(localStorage.getItem("userId"))
            userRes?.data?.seller && localStorage.setItem("sellerId", userRes?.data.seller)
            await SellerEditApi(localStorage.getItem("sellerId"), {
                first_name,
                last_name,
                shop_name,
                bank_mfo,
                bank_account,
                bio,
                inn,
                address,
                surname,
                email,
                shop_picture: [2]
            })
        } else {
            await CreateSellerApi(localStorage.getItem("userId"), {
                first_name,
                last_name,
                shop_name,
                bank_mfo,
                bank_account,
                bio,
                inn,
                address,
                surname,
                email,
                shop_picture: [1]
            })
        }
    }


    return (
        <PersonalInformationStyles>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Warning>
                        <WarningIcon/>
                        <span>Fields marked with an asterisk (*) are required</span>
                    </Warning>
                    <Formik
                        enableReinitialize
                        initialValues={value}
                        validationSchema={schema}
                        onSubmit={values => {
                            handleSubmit(values)
                        }}
                    >
                        {({errors, values, touched, handleChange, handleBlur}) => (
                            <Form>
                                <Typography fontSize={"20px"} paddingTop={"20px"}>Personal Information</Typography>
                                <Stack direction={"row"} gap={2} flexWrap={"wrap"} className={"form-personal-info"}>
                                    <Field
                                        type={"text"}
                                        error={errors.first_name && touched.first_name}
                                        name="first_name"
                                        id="outlined-required"
                                        label="First Name"
                                        onBlur={handleBlur}
                                        as={TextField}
                                        required
                                        onChange={handleChange}
                                        value={values.first_name}
                                    />
                                    <Field
                                        type={"text"}
                                        error={errors.last_name && touched.last_name}
                                        name="last_name"
                                        id="outlined-required"
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        as={TextField}
                                        required
                                        value={values.last_name}
                                        onChange={handleChange}
                                    />
                                    <Field
                                        type={"text"}
                                        error={errors.surname && touched.surname}
                                        name="surname"
                                        id="outlined-required"
                                        label="Surname"
                                        as={TextField}
                                        required
                                        value={values.surname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Field
                                        type={"email"}
                                        error={errors.email && touched.email}
                                        name="email"
                                        id="outlined-required"
                                        label="Email"
                                        as={TextField}
                                        required
                                        value={values.email}
                                        onChange={handleChange}
                                        helperText={errors.email}
                                        onBlur={handleBlur}
                                    />
                                </Stack>
                                <Typography fontSize={"20px"} paddingTop={"20px"}>Registration Form</Typography>
                                <Stack direction={"row"} gap={2} flexWrap={"wrap"} className={"form-personal-info"}>
                                    <Field
                                        type={"text"}
                                        error={errors.inn && touched.inn}
                                        name="inn"
                                        id="outlined-required"
                                        label="INN"
                                        as={TextField}
                                        required
                                        inputProps={{maxLength: 8}}
                                        helperText={errors.inn}
                                        value={values.inn}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Field
                                        error={errors.bank_mfo && touched.bank_mfo}
                                        name="bank_mfo"
                                        id="outlined-required"
                                        label="Bank MFO"
                                        as={TextField}
                                        required
                                        inputProps={{maxLength: 5}}
                                        value={values.bank_mfo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={touched.bank_mfo && errors.bank_mfo}
                                    />
                                    <Field
                                        error={errors.bank_account && touched.bank_account}
                                        name="bank_account"
                                        id="outlined-required"
                                        label="Bank Account"
                                        as={TextField}
                                        required
                                        value={values.bank_account}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Stack>
                                <Typography fontSize={"20px"} paddingTop={"20px"}>Shop Info</Typography>
                                <Stack direction={"row"} gap={2} flexWrap={"wrap"} className={"form-personal-info with-bio"}>
                                    <Field
                                        error={errors.shop_name && touched.shop_name}
                                        name="shop_name" id="outlined-required"
                                        label="Shop Name"
                                        as={TextField}
                                        required
                                        value={values.shop_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Field
                                        error={errors.address && touched.address}
                                        name="address" id="outlined-required"
                                        label="Address"
                                        as={TextField}
                                        required
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Field
                                        error={errors.bio && touched.bio}
                                        name="bio"
                                        id="outlined-required"
                                        multiline
                                        rows={4}
                                        label="Bio" as={TextField}
                                        required
                                        value={values.bio}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Stack>
                                <Button sx={{marginTop: "10px"}} variant={"contained"} type={"submit"}>Save</Button>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
        </PersonalInformationStyles>
    )
}

export default PersonalInformation