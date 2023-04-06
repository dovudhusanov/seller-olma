import React from 'react';
import {Button} from "../button";

function Cta() {
    return (
        <section className="cta section">
            <div className="container">
                <div className="cta-inner section-inner">
                    <h3 className="section-title mt-0" style={{marginRight: "10px"}}>Don't miss the opportunity Become a Olma seller and
                        take the lead
                        in your niche!</h3>
                    <div className="cta-cta">
                        <Button textWeight={"w_600"} background={"primary"} hover={"primary"} className={"button-wide-mobile"}>Sign up</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;