import React, {useRef, useState} from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import {SelectedImages, SelectedImagesButton, SelectImages} from "../create-product.styles";
import {SelectImagesIcon} from "../../../icons/select-images.icon";
import {UploadProductImagesApi} from "../../../api/product/upload-product-images-api";
import {ImageUploadPropsInterface} from "../../../interfaces/images-upload.interface";

function ImagesUpload({setImagePreviews, setImageIds, imagePreviews}: ImageUploadPropsInterface) {

    const selectImgRef: any = useRef()

    const [images, setImages] = useState<any>([]);

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

    const handleAllImages = async () => {
        const formData: any = new FormData();
        images.forEach((file: any, index: number) => {
            formData.append(`file[${index}]`, file, file.name);
        });

        try {
            const res = await UploadProductImagesApi(formData);
            console.log(res.data);
            const imageIdsString = res.data.results.map((result: any) => String(result))
            setImageIds((prevState: any) => [...prevState, ...imageIdsString])

        } catch (error) {
            console.error(error);
        }
    }

    const deleteImage = (index: number) => {
        const newImages = [...images];
        const newPreviews = [...imagePreviews];
        newImages.splice(index, 1);
        newPreviews.splice(index, 1);
        setImages(newImages);
        setImagePreviews(newPreviews);
    };

    const imagePreviewElements = imagePreviews.map((preview: any, index: number) => (
        <div key={index}>
            <img src={preview} alt={images[index].name}/>
            <IconButton aria-label="delete" onClick={() => deleteImage(index)}>
                <i className="fa-solid fa-xmark"></i>
            </IconButton>
        </div>
    ));

    return (
        <>
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
                    >Drop files here or click <span
                        style={{textDecoration: "underline", color: "var(--primary-color)"}}>browse</span> through your
                        machine</Typography>
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
                    <Button variant={"contained"} onClick={handleAllImages}>Upload Files</Button>
                </SelectedImagesButton>
            )}
        </>
    );
}

export default ImagesUpload;