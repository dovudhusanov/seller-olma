import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ChangeTitle, ScrollTop} from "../../middleware";

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
        <h1>Products Page!</h1>
    );
}

export default Products;