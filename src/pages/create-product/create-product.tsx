import React, {useEffect, useState} from 'react';
import {
    CreateProductStyles,
} from "./create-product.styles";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {useNavigate, useParams} from "react-router-dom";
import {Form, Formik} from "formik";
import * as yup from "yup";
import {ProductTypes} from "../../interfaces/product.interface";
import {ModalMain} from "../../components";
import {LeftFormComponent, RightFormComponent} from "./components";
import {CreateProductApi} from "../../api";

const schema = yup.object().shape({
    name: yup.string().required('Product name is required'),
    description: yup.string().required('description is required'),
    category: yup.string().required('Category is required'),
    price: yup.string().required("Price should not be $0.00"),
});

function CreateProduct() {

    ScrollTop()
    ChangeTitle("Create Product")

    const {sellerId} = useParams()

    const isSeller = localStorage.getItem("sellerId") === sellerId

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem("sellerId") && isSeller
            ? navigate(`/seller/${localStorage.getItem("sellerId")}/products/create`)
            : navigate("/")
    }, [window.location.pathname])

    const [imagePreviews, setImagePreviews] = useState<any>([])
    const [imageIds, setImageIds] = useState<string[]>([])
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string>("")
    const [isAddCharacteristic, setIsAddCharacteristic] = useState<boolean>(false)

    const [value, setValue] = useState<ProductTypes>({
        name: '',
        category: "",
        seller: localStorage.getItem("sellerId"),
        description: "",
        price: "",
        discount: 0,
        images: [],
        attributes: []
    })

    const handleSubmit = async (values: ProductTypes) => {
        const {name, price, category, description, seller, discount, attributes} = values
        try {
            const res = await CreateProductApi({
                name,
                price,
                category,
                description,
                seller,
                discount,
                attributes,
                images: ["60", "61"]
            })
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <CreateProductStyles>
                <Formik
                    enableReinitialize
                    initialValues={value}
                    validationSchema={schema}
                    onSubmit={values => {
                        handleSubmit(values)
                    }}
                >
                    {({
                          errors,
                          values,
                          touched,
                          handleChange,
                          handleBlur
                      }) => (
                        <Form>
                            <LeftFormComponent
                                errors={errors}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                values={values}
                                setImagePreviews={setImagePreviews}
                                setImageIds={setImageIds}
                                imagePreviews={imagePreviews}
                            />
                            <RightFormComponent
                                setModalOpen={setModalOpen}
                                errors={errors}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                values={values}
                                setModalType={setModalType}
                                setIsAddCharacteristic={setIsAddCharacteristic}
                            />
                        </Form>
                    )}
                </Formik>
            </CreateProductStyles>
            <ModalMain
                type={modalType}
                btnText="Add"
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                isAddCharacteristic={isAddCharacteristic}
            />
        </>
    );
}

export default CreateProduct;