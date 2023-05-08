import React, {useState} from 'react';
import {Field} from "formik";
import {TextField, Typography} from "@mui/material";
import ImagesUpload from "./images-upload";
import {LeftForm} from "../create-product.styles";
import {ImageUploadPropsInterface} from "../../../interfaces/images-upload.interface";
import {CreateProductFormInterface} from "../../../interfaces/create-product-form.interface";

function LeftFormComponent({
   errors,
   touched,
   handleBlur,
   handleChange,
   values,
   setImagePreviews,
   setImageIds,
   imagePreviews,
    setValue,
    value
}: ImageUploadPropsInterface & CreateProductFormInterface) {

    return (
        <LeftForm>
            <Field
                type={"text"}
                error={errors.name && touched.name}
                name="name"
                id="outlined-required"
                label="Product Name"
                onBlur={handleBlur}
                as={TextField}
                required
                onChange={handleChange}
                value={values.name}
                fullWidth
                helperText={errors.name}
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
            <ImagesUpload
                setImagePreviews={setImagePreviews}
                setImageIds={setImageIds}
                imagePreviews={imagePreviews}
                setValue={setValue}
                value={value}
            />
        </LeftForm>
    );
}

export default LeftFormComponent;