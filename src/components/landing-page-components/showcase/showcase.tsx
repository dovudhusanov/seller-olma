import React from 'react';
import {ShowcaseRightImg} from "./showcase-right-img";
import {Button, Typography} from "../..";
import {Link} from "react-router-dom";

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
                        <div className="hero-cta">
                            <Link to={"/signup"}><Button textWeight={"w_600"} background={"primary"} hover={"primary"}>Sign Up</Button></Link>
                            <Link to={"login"}>
                                <Button textWeight={"w_600"} background={"dark"} hover={"dark"}>Log In</Button>
                            </Link>
                        </div>
                    </div>
                    <ShowcaseRightImg />
                </div>
            </div>
        </section>
    );
}

export default Showcase;