import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import { PersonalInformationStyles, Warning} from "./personal-information.styles";
import {WarningIcon} from "../../icons";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {CreateSellerInfoApi} from "../../api/profile/create-seller-info-api";
import {GetUserApi} from "../../api/profile/get-user-api";
import {GetSellerApi} from "../../api/profile/get-seller-api";

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    surname: yup.string().required('Surname is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    inn: yup.number().required('INN is required').test('inn', 'INN must be exactly 8 digits', (val: any) => val && val.toString().length === 8),
    bankMFO: yup.number().required('Bank MFO is required').test('inn', 'Bank MFO must be exactly 5 digits', (val: any) => val && val.toString().length === 5),
    bankAccount: yup.string().required('Bank account is required'),
    shopName: yup.string().required('Shop name is required'),
    address: yup.string().required('Address is required'),
    bio: yup.string().required('Bio is required'),
});

interface PersonalInformationInterface {
    first_name: string
    last_name: string
    surname: string
    email: string
    inn: string
    bank_mfo: string
    bank_account: string
    shop_name: string
    address: string
    bio: string
}

function PersonalInformation() {

    const [sellerData, setSellerData] = useState<PersonalInformationInterface | any>([])

    async function GetUser() {
        await GetUserApi(localStorage.getItem("userId"))
            .then((res: any) => {
                localStorage.setItem("sellerId", res.data.seller)
            })

        await GetSellerApi(localStorage.getItem("sellerId"))
            .then((res: any) => {
                setSellerData(res.data)
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
                    shop_name: res.data?.shop_name
                })
                console.log(res.data)
            })
    }

    useEffect(() => {
        GetUser()
    }, [])

    const [value, setValue] = useState<PersonalInformationInterface>({
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
    })

    const handleEdit = async (values: PersonalInformationInterface) => {
        const {first_name, last_name, shop_name, bank_account, bank_mfo, bio, inn, address, surname, email} = values
        await CreateSellerInfoApi(localStorage.getItem("userId"), {
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

    const handleChange = (e: React.ChangeEvent<any>) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    return (
        <PersonalInformationStyles>
            <Warning>
                <WarningIcon/>
                <span>Fields marked with an asterisk (*) are required</span>
            </Warning>
            <Formik
                initialValues={value}
                validationSchema={schema}
                onSubmit={values => {
                    handleEdit(values)
                }}
            >
                {({errors, values, touched}) => (
                    <Form>
                        <Typography fontSize={"20px"} paddingTop={"20px"}>Personal Information</Typography>
                        <Stack direction={"row"} gap={2} flexWrap={"wrap"} className={"form-personal-info"}>
                            <Field
                                error={errors.first_name && touched.first_name}
                                name="first_name"
                                id="outlined-required"
                                label="First Name"
                                as={TextField}
                                required
                                onChange={handleChange}
                                value={value.first_name}
                            />
                            <Field
                                error={errors.last_name && touched.last_name}
                                name="last_name"
                                id="outlined-required"
                                label="Last Name"
                                as={TextField}
                                required
                                value={value.last_name}
                                onChange={handleChange}
                            />
                            <Field
                                error={errors.surname && touched.surname}
                                name="surname"
                                id="outlined-required"
                                label="Surname"
                                as={TextField}
                                required
                                value={value.surname}
                                onChange={handleChange}
                            />
                            <Field
                                error={errors.email && touched.email}
                                name="email"
                                id="outlined-required"
                                label="Email"
                                as={TextField}
                                required
                                value={value.email}
                                onChange={handleChange}

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
                                value={value.inn}
                                onChange={handleChange}
                            />
                            <Field
                                error={errors.bank_mfo && touched.bank_mfo}
                                name="bank_mfo"
                                id="outlined-required"
                                label="Bank MFO"
                                as={TextField}
                                required
                                inputProps={{maxLength: 5}}
                                value={value.bank_mfo}
                                onChange={handleChange}
                            />
                            <Field
                                error={errors.bank_account && touched.bank_account}
                                name="bank_account"
                                id="outlined-required"
                                label="Bank Account"
                                as={TextField}
                                required
                                value={value.bank_account}
                                onChange={handleChange}
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
                                value={value.shop_name}
                                onChange={handleChange}
                            />
                            <Field
                                error={errors.address && touched.address}
                                name="address" id="outlined-required"
                                label="Address"
                                as={TextField}
                                required
                                value={value.address}
                                onChange={handleChange}
                            />
                            <Field
                                error={errors.bio && touched.bio}
                                name="bio"
                                id="outlined-required"
                                multiline
                                rows={4}
                                label="Bio" as={TextField}
                                required
                                value={value.bio}
                                onChange={handleChange}
                            />

                        </Stack>
                        <Button sx={{marginTop: "10px"}} variant={"contained"} type={"submit"}>Save</Button>
                    </Form>
                )}
            </Formik>
        </PersonalInformationStyles>
    )
}

export default PersonalInformation