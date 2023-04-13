import React, {useEffect, useRef, useState} from 'react';
import {
    CreateProductStyles,
    IconDollar,
    LeftForm,
    PriceInput, Right,
    RightForm,
    SelectedImages, SelectedImagesButton,
    SelectImages
} from "./create-product.styles";
import {
    CloseSquareOutlined
} from '@ant-design/icons';
import {ChangeTitle, ScrollTop} from "../../middleware";
import {useNavigate, useParams} from "react-router-dom";
import {Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import {ProductTypes} from "../../types/product.types";
import {SelectImagesIcon} from "../../icons/select-images.icon";
import {CategoriesData} from "../../data";

const schema = yup.object().shape({
    product_name: yup.string().required('Product name is required'),
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

    const handleSubmit = (values: ProductTypes) => {

    }

    const [value, setValue] = useState<ProductTypes>({
        product_name: '',
        category: "",
        seller: "",
        description: "",
        price: "",
        discount: 0,
        images: [],
        attributes: []
    })

    const selectImgRef: any = useRef()

    const [images, setImages] = useState<any>([]);
    const [imagePreviews, setImagePreviews] = useState<any>([])

    const handleFileUpload = (event: React.ChangeEvent<any>) => {
        const files = Array.from(event.target.files);
        const imagePreviews = files.map((file: any) => URL.createObjectURL(file));
        setImages((prevState: any) => [...prevState, ...files]);
        setImagePreviews((prevState: any) => [...prevState, ...imagePreviews]);
    };

    const handleFileDrop = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        const files = Array.from(event.dataTransfer.files);
        const imagePreviews = files.map((file: any) => URL.createObjectURL(file));
        setImages((prevState: any) => [...prevState, ...files]);
        setImagePreviews((prevState: any) => [...prevState, ...imagePreviews]);
    };

    const deleteImage = (index: any) => {
        const newImages = [...images];
        const newPreviews = [...imagePreviews];
        newImages.splice(index, 1);
        newPreviews.splice(index, 1);
        setImages(newImages);
        setImagePreviews(newPreviews);
    };

    const imagePreviewElements = imagePreviews.map((preview: any, index: any) => (
        <div key={index}>
            <img src={preview} alt={images[index].name}/>
            <IconButton aria-label="delete" onClick={() => deleteImage(index)}>
                <i className="fa-solid fa-xmark"></i>
            </IconButton>
        </div>
    ));

    return (
        <CreateProductStyles>
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
                        <LeftForm>
                            <Field
                                type={"text"}
                                error={errors.product_name && touched.product_name}
                                name="product_name"
                                id="outlined-required"
                                label="Product Name"
                                onBlur={handleBlur}
                                as={TextField}
                                required
                                onChange={handleChange}
                                value={values.product_name}
                                fullWidth
                                helperText={errors.product_name}
                            />
                            <Typography
                                sx={{
                                    marginTop: "25px",
                                    marginBottom: "10px",
                                    fontWeight: "600",
                                    fontSize: "0.875rem",
                                    color: "rgb(99, 115, 129)"
                                }}
                            >Description</Typography>
                            <Field
                                type={"text"}
                                error={errors.description && touched.description}
                                name="description"
                                id="outlined-required"
                                multiline
                                rows={6}
                                label="Write something awesome..."
                                onBlur={handleBlur}
                                as={TextField}
                                required
                                onChange={handleChange}
                                value={values.description}
                                fullWidth
                                helperText={errors.description}
                            />
                            <Typography
                                sx={{
                                    marginTop: "25px",
                                    marginBottom: "10px",
                                    fontWeight: "600",
                                    fontSize: "0.875rem",
                                    color: "rgb(99, 115, 129)"
                                }}
                            >Images</Typography>
                            <SelectImages onClick={() => selectImgRef.current.click()} onDrop={handleFileDrop}
                                          onDragOver={(event) => {
                                              event.preventDefault();
                                              event.stopPropagation();
                                          }}>
                                <SelectImagesIcon/>
                                <Box>
                                    <Typography sx={{
                                        margin: "0px 0px 8px",
                                        fontWeight: 700,
                                        lineHeight: "1.5",
                                        fontSize: "1.125rem",
                                    }}>Drop or Select File</Typography>
                                    <Typography
                                        sx={{
                                            lineHeight: "1.57143",
                                            fontSize: "0.875rem",
                                            fontWeight: 400,
                                            color: "rgb(99, 115, 129)"
                                        }}
                                    >Drop files here or click browse through your machine</Typography>
                                </Box>
                                <input type={"file"} ref={selectImgRef} onChange={handleFileUpload} multiple/>
                            </SelectImages>
                            <SelectedImages>{imagePreviewElements}</SelectedImages>
                            {Object.keys(images).length !== 0 && (
                                <SelectedImagesButton>
                                    <Button variant={"text"} onClick={() => {
                                        setImagePreviews([])
                                        setImages([])
                                    }}>Remove All</Button>
                                    <Button variant={"contained"}>Upload Files</Button>
                                </SelectedImagesButton>
                            )}
                        </LeftForm>
                        <Right>
                            <RightForm>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Field
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.category}
                                        label="Category"
                                        name={"category"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        as={Select}
                                        helperText={errors.category}
                                    >
                                        {CategoriesData.map(item => (
                                            <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem>
                                        ))}
                                    </Field>
                                </FormControl>
                                <PriceInput>
                                    <IconDollar>$</IconDollar>
                                    <Field
                                        type={"text"}
                                        error={errors.price && touched.price}
                                        name="price"
                                        id=":ra:"
                                        aria-invalid={true}
                                        label=". .Price"
                                        onBlur={handleBlur}
                                        as={TextField}
                                        required
                                        onChange={handleChange}
                                        value={values.price}
                                        fullWidth
                                        aria-describedby=":ra:-helper-text"
                                        placeholder={"0.00"}
                                        helperText={errors.price}
                                    />
                                </PriceInput>
                            </RightForm>
                        </Right>
                    </Form>
                )}
            </Formik>
        </CreateProductStyles>
    );
}

export default CreateProduct;