import React, {useEffect, useState} from 'react';
import {Form, ProfileStyles, Box} from "./profile.styled";
import {ContentLoader, Typography} from "../../components";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {useNavigate} from "react-router-dom";
import {GetUserApi} from "../../api/profile/get-user-api";
import {GetSellerApi} from "../../api/profile/get-seller-api";
import Modal from "../../components/modal/modal";
import {Button, TextField} from "@mui/material";
import {Btn} from "../../components/modal/modal.styles";
import {SellerEditApi} from "../../api/profile/seller-edit-api";
import ModalForm from "../../components/modal/components/modal-form";
import ProfileForm from "./components/profile-form";
import ModalMain from "../../components/modal";

function Profile() {

    ScrollTop()
    ChangeTitle("Personal Information")

    const navigate = useNavigate()

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleOpen = (index: number) => {
        let type;
        switch (index) {
            case 1:
                type = "name";
                break;
            case 2:
                type = "email";
                break;
            case 3:
                type = "phone";
                break;
            case 4:
                type = "password";
                break;
            default:
                type = "";
        }
        setModalOpen(true);
        setModalType(type);
    };

    const [phoneNumber, setPhoneNumber] = useState<number[]>([])
    const [profileData, setProfileData] = useState<any>([])

    async function GetUser(): Promise<void> {
        setIsLoading(true)
        const userRes = await GetUserApi(localStorage.getItem("userId"))
        userRes?.data[0]?.seller && localStorage.setItem("sellerId", userRes.data[0].seller)
        const res = userRes?.data[0]?.seller && await GetSellerApi(localStorage.getItem("sellerId"))
        setProfileData(res.data[0])
        setPhoneNumber(userRes?.data[0].phone);
        setIsLoading(false)
    }

    useEffect((): void => {
        GetUser()
    }, [])

    return (
        <ProfileStyles>
            {isLoading ? (
                <ContentLoader/>
            ) : (
                <>
                    <Typography textSize={"h3"} color={"text"} tag={"h3"} textWeight={"w_600"}>Account Info</Typography>
                    <ProfileForm profileData={profileData} phoneNumber={phoneNumber} handleOpen={handleOpen}/>
                    <ModalMain modalOpen={modalOpen} setModalOpen={setModalOpen} modalType={modalType}/>
                </>
            )}
        </ProfileStyles>
    );
}

export default Profile;