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

function Profile() {

    ScrollTop()
    ChangeTitle("Personal Information")

    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState<number[]>([])
    const [profileData, setProfileData] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

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

    const Input = ({ type }: { type: string}) => {

        const [value, setValue] = useState<object>({
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

        return (
          <>
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
          </>
        );
    };

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string>("")

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

    return (
        <ProfileStyles>
            {isLoading ? (
                <ContentLoader />
            ) : (
                <>
                    <Typography textSize={"h3"} color={"text"} tag={"h3"} textWeight={"w_600"}>Account Info</Typography>
                    <Form>
                        <Box>
                            <div>
                                <span>Your Name</span>
                                <p>{profileData.first_name}</p>
                            </div>
                            <span onClick={() => handleOpen(1)}>change</span>
                        </Box>
                        <Box>
                            <div>
                                <span>Email</span>
                                <p>{profileData.email}</p>
                            </div>
                            <span onClick={() => handleOpen(2)}>change</span>
                        </Box>
                        <Box>
                            <div>
                                <span>Phone</span>
                                <p>{phoneNumber}</p>
                            </div>
                            <span onClick={() => handleOpen(3)}>change</span>
                        </Box>
                        <Box>
                            <div>
                                <span>Password</span>
                                <p>**********</p>
                            </div>
                            <span onClick={() => handleOpen(4)}>change</span>
                        </Box>
                    </Form>
                </>
            )}

            <Modal
                title={`Edit your ${modalType}`}
                elements={<Input type={modalType}/>}
                isModalOpen={modalOpen}
                setModalOpen={setModalOpen}
            />
        </ProfileStyles>
    );
}

export default Profile;