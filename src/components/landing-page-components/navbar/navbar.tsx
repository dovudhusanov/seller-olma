import React from 'react';
import {Button} from "../../button";
// @ts-ignore
import logo from "../../../assets/logo.png"
import {Typography} from "../../typography";

function Navbar() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <a href={"#"}>
                            <img src={logo} className={"mr-8"} alt="logo" width={40}/>
                            <Typography textWeight={"w_700"} color={"lightText"} style={{position: "relative", top: "4px"}} tag={"h4"} textSize={"h4"}>Olma Market</Typography>
                        </a>
                    </div>
                    <ul>
                        <a href={"#advantages"}>Advantages</a>
                        <a href={"#faq"}>FAQ</a>
                        <a href={"#partners"}>Partners</a>
                        <div>
                            <Button background={"primary"} hover={"primary"} textWeight={"w_600"}>Sign Up</Button>
                            <Button textWeight={"w_600"} background={"dark"} hover={"dark"}>Log In</Button>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;