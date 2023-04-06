import React from 'react';
import {Button} from "../button";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h3 className="m-0">
                            olma market
                        </h3>
                    </div>
                    <ul>
                        <a href={"#"}>Advantages</a>
                        <a href={"#"}>FAQ</a>
                        <a href={"#"}>Partners</a>
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