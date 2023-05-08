import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import {PersonalInformationStyles, Warning} from "./personal-information.styles";
import {WarningIcon} from "../../icons";
import {Stack, TextField, Typography} from "@mui/material";
import {SellerInterface} from "../../interfaces/seller.interface";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {useNavigate} from "react-router-dom";
import {ContentLoader} from "../../components";
import {CreateSellerApi, GetSellerApi, GetUserApi, SellerEditApi} from "../../api";
import {toast} from "react-toastify";
import LoadingButton from '@mui/lab/LoadingButton';

const schema = yup.object().shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    surname: yup.string().required('Surname is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    inn: yup.number().required('INN is required').test('inn', 'INN must be exactly 9 digits', (val: any) => val && val.toString().length === 9),
    bank_mfo: yup.number().required('Bank MFO is required').test('bank_mfo', 'Bank MFO must be exactly 6 digits', (val: any) => val && val.toString().length === 6),
    bank_account: yup.string().required('Bank account is required'),
    shop_name: yup.string().required('Shop name is required'),
    address: yup.string().required('Address is required'),
    bio: yup.string().required('Bio is required'),
});

function PersonalInformation() {

    ScrollTop()
    ChangeTitle("Personal Information")

    const navigate = useNavigate()

    const [userData, setUserData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    async function GetUser(): Promise<void> {
        setIsLoading(true)
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        console.log(userRes.data)
        userRes?.data?.seller && localStorage.setItem("sellerId", userRes.data.seller)
        const res = userRes?.data?.seller && await GetSellerApi(localStorage.getItem("sellerId"))
        setUserData(userRes?.data);

        setValue({
            first_name: res?.data[0]?.first_name,
            last_name: res?.data[0]?.last_name,
            email: res?.data[0]?.email,
            surname: res?.data[0]?.surname,
            address: res?.data[0]?.address,
            inn: res?.data[0]?.inn,
            bio: res?.data[0]?.bio,
            bank_account: res?.data[0]?.bank_account,
            bank_mfo: res?.data[0]?.bank_mfo,
            shop_name: res.data[0]?.shop_name,
            shop_picture: res?.data[0]?.image
        })
        setIsLoading(false)
    }

    useEffect((): void => {
        GetUser()
    }, [])

    const [value, setValue] = useState<SellerInterface>({
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

    const handleSubmit = async (values: SellerInterface): Promise<void> => {
        const {first_name, last_name, shop_name, bank_account, bank_mfo, bio, inn, address, surname, email} = values
        if (userData.is_seller) {
            setLoading(true)
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
            }).then(_ => {
                toast.success("Infos successfully changed!")
            }).catch(_ => {
                toast.error("Error")
            })
            setLoading(false)
        } else {
            try {
                const res = await CreateSellerApi(localStorage.getItem("userId"), {
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
                res?.data?.id && localStorage.setItem("sellerId", res?.data.id);
                window.location.reload()
                navigate(`seller/${localStorage.getItem("sellerId")}/products/all`)
                console.log(res)
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <PersonalInformationStyles>
            {(userData.is_seller ? isLoading : !isLoading) ? (
                <ContentLoader/>
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
                                    {!localStorage.getItem("sellerId") && (
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
                                    )}
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
                                        inputProps={{maxLength: 9}}
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
                                        inputProps={{maxLength: 6}}
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
                                <Stack direction={"row"} gap={2} flexWrap={"wrap"}
                                       className={"form-personal-info with-bio"}>
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
                                <LoadingButton sx={{marginTop: "10px"}} loading={loading} variant="contained"
                                               type={"submit"}>
                                    Save
                                </LoadingButton>
                            </Form>
                        )}
                    </Formik>
                </>
            )}
        </PersonalInformationStyles>
    )
}

export default PersonalInformation