import React from 'react';
import {ShowcaseRightImg} from "./showcase-right-img";
import {Button, Typography} from "../..";

function Showcase() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <Typography textSize={"h2"} textWeight={"w_700"} tag={"h2"} color={"lightText"}>Don't miss the opportunity</Typography>
                        <Typography textSize={"h5"} className={"mb-24 mt-8"} textWeight={"w_400"} tag={"p"} color={"lightGray"}>Start building your business
                            at the fastest growing
                            marketplace</Typography>
                        <div className="hero-cta"><Button textWeight={"w_600"} background={"primary"} hover={"primary"}>Sign Up</Button>
                            <Button textWeight={"w_600"} background={"dark"} hover={"dark"}>Log In</Button>
                        </div>
                    </div>
                    <ShowcaseRightImg />
                </div>
            </div>
        </section>
    );
}

export default Showcase;