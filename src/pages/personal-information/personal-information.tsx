import React, {FormEvent, useEffect, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {FormStyle, PersonalInformationStyles, Warning} from "./personal-information.styles";
import {WarningIcon} from "../../icons";
import {Button, Stack, TextField, Typography} from "@mui/material";
import {EditSellerInfoApi} from "../../api/profile/edit-seller-info-api";
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
    firstName: string
    lastName: string
    surname: string
    email: string
    inn: string
    bankMFO: string
    bankAccount: string
    shopName: string
    address: string
    bio: string
}

function PersonalInformation() {

    async function GetSeller() {
        await GetSellerApi(5)
            .then((res: any) => {
                console.log(res.data)
            })
    }

    useEffect(() => {
        GetSeller()
    }, [])

    const [value, setValue] = useState<PersonalInformationInterface>({
        firstName: '',
        lastName: '',
        surname: '',
        email: '',
        inn: '',
        bankMFO: '',
        bankAccount: '',
        shopName: '',
        address: '',
        bio: '',
    })

    const handleEdit = async (values: PersonalInformationInterface) => {
        const {firstName, lastName, shopName, bankAccount, bankMFO, bio, inn, address, surname, email} = values
        await EditSellerInfoApi(localStorage.getItem("userId"), {
            first_name: firstName,
            last_name: lastName,
            shop_name: shopName,
            bank_mfo: bankMFO,
            bank_account: bankAccount,
            bio,
            inn,
            address,
            surname,
            email,
            images: [1]
        })
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
                {({errors, touched}) => (
                    <Form>
                        <Typography fontSize={"20px"} paddingTop={"20px"}>Personal Information</Typography>
                        <Stack direction={"row"} gap={2} flexWrap={"wrap"} className={"form-personal-info"}>
                            <Field
                                error={errors.firstName && touched.firstName}
                                name="firstName"
                                id="outlined-required"
                                label="First Name"
                                as={TextField}
                                required
                            />
                            <Field
                                error={errors.lastName && touched.lastName}
                                name="lastName"
                                id="outlined-required"
                                label="Last Name"
                                as={TextField}
                                required
                            />
                            <Field
                                error={errors.surname && touched.surname}
                                name="surname"
                                id="outlined-required"
                                label="Surname"
                                as={TextField}
                                required
                            />
                            <Field
                                error={errors.email && touched.email}
                                name="email"
                                id="outlined-required"
                                label="Email"
                                as={TextField}
                                required

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
                            />
                            <Field
                                error={errors.bankMFO && touched.bankMFO}
                                name="bankMFO"
                                id="outlined-required"
                                label="Bank MFO"
                                as={TextField}
                                required
                                inputProps={{maxLength: 5}}
                            />
                            <Field
                                error={errors.bankAccount && touched.bankAccount}
                                name="bankAccount"
                                id="outlined-required"
                                label="Bank Account"
                                as={TextField}
                                required
                            />
                        </Stack>
                        <Typography fontSize={"20px"} paddingTop={"20px"}>Shop Info</Typography>
                        <Stack direction={"row"} gap={2} flexWrap={"wrap"} className={"form-personal-info with-bio"}>
                            <Field
                                error={errors.shopName && touched.shopName}
                                name="shopName" id="outlined-required"
                                label="Shop Name"
                                as={TextField}
                                required
                            />
                            <Field
                                error={errors.address && touched.address}
                                name="address" id="outlined-required"
                                label="Address"
                                as={TextField}
                                required
                            />
                            <Field
                                error={errors.bio && touched.bio}
                                name="bio"
                                id="outlined-required"
                                multiline
                                rows={4}
                                label="Bio" as={TextField}
                                required/>

                        </Stack>
                        <Button sx={{marginTop: "10px"}} variant={"contained"} type={"submit"}>Save</Button>
                    </Form>
                )}
            </Formik>
        </PersonalInformationStyles>
    )
}

export default PersonalInformation