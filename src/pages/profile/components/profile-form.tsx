import {Box, Form} from "../profile.styled";
import {ProductTypes} from "../../../interfaces/product.interface";
import {array} from "yup";

interface ProfileFormInterface {
    handleOpen: (number: number) => void
    profileData: ProductTypes[] | any
    phoneNumber: string | number[]
}

function ProfileForm({handleOpen, profileData, phoneNumber}: ProfileFormInterface) {

    return (
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
    );
}

export default ProfileForm;