import React from 'react';
import {ShowcaseRightImg} from "./showcase-right-img";
import {Button} from "../button";

function Showcase() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <h1 className="hero-title mt-0">Don't miss the opportunity</h1>
                        <p className="hero-paragraph">Start building your business
                            at the fastest growing
                            marketplace</p>
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