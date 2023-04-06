import React from 'react';
import {Typography} from "../..";
import PartnersSlider from "./partners-slider/partners-slider";
import {PartnersStyles} from "./partners.styles";

function Partners() {
    return (
        <PartnersStyles id={"partners"}>
            <div className="container">
                <Typography textSize={"h2"} textWeight={"w_700"} tag={"h2"} color={"lightText"}>Our Partners</Typography>
                <PartnersSlider />
            </div>
        </PartnersStyles>
    );
}

export default Partners;