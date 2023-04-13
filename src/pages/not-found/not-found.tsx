import React, {useEffect} from 'react';
import {NotFoundStyles} from "./not-found.styles";
import {Typography} from "../../components";
import {NotFoundIcon} from "../../icons";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ChangeTitle, ScrollTop} from "../../middleware";

function NotFound() {

    ScrollTop()
    ChangeTitle("Page Not Found")

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/404")
    }, [window.location.pathname])

    return (
        <NotFoundStyles>
            <Typography textWeight={"w_600"} tag={"h3"} textSize={"h2"} color={"text"}>Sorry, page not
                found!</Typography>
            <Typography textSize={"paragraph"} textWeight={"w_400"} tag={"p"} color={"text"}>Sorry, we couldn’t find the
                page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</Typography>
            <NotFoundIcon />
            <Button variant={"contained"} onClick={() => navigate("/")}>Go To Home</Button>
        </NotFoundStyles>
    );
}

export default NotFound;