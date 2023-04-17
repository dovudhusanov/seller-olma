import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {ChangeTitle, ScrollTop} from "../../middleware";
import {Box, Button} from "@mui/material";
import { Blurhash } from "react-blurhash";
// @ts-ignore
import tel from "../../assets/tel.jpg"

function Products() {

    ScrollTop()
    ChangeTitle("Products")

    const {sellerId} = useParams()

    const isSeller = localStorage.getItem("sellerId") === sellerId

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem("sellerId") && isSeller
            ? navigate(`/seller/${localStorage.getItem("sellerId")}/products/all`)
            : navigate("/")
    }, [window.location.pathname])

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
        }}>
            <h1 style={{marginBottom: "10px"}}>Products Page!</h1>
            <Link to={`/seller/${localStorage.getItem("sellerId")}/products/create`}>
                <Button>Create Product</Button>
            </Link>
        </Box>
    );



}

export default Products;