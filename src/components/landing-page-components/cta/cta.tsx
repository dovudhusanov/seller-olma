import React from 'react';
import {Button, Typography} from "../..";

function Cta() {
    return (
        <section className="cta section">
            <div className="container">
                <div className="cta-inner section-inner">
                    <Typography tag={"h3"} responsive={{xs: "h5"}} textWeight={"w_700"} textSize={"h3"} color={"lightText"} style={{marginRight: "10px"}}>Don't miss the opportunity Become a Olma seller and
                        take the lead
                        in your niche!</Typography>
                    <div className="cta-cta">
                        <Button textWeight={"w_600"} background={"primary"} hover={"primary"} className={"button-wide-mobile"}>Sign up</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;