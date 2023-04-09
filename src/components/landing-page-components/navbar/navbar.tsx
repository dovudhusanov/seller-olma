import React, {useRef, useState} from 'react';
import {Button} from "../../button";
// @ts-ignore
import logo from "../../../assets/logo.png"
import {Typography} from "../../typography";
import {Link} from "react-router-dom";

function Navbar() {

    const [isMobile, setIsMobile] = useState<boolean>(false)

    window.addEventListener("click", () => {
        setIsMobile(false)
    })

    return (
        <header className={isMobile ? "site-header active" : "site-header"}>
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <a href={"#"}>
                            <img src={logo} className={"mr-8"} alt="logo" width={40} style={{position: "relative", top: "-4px"}}/>
                            <Typography textWeight={"w_700"} color={"lightText"} tag={"h4"} textSize={"h4"}>Olma Market</Typography>
                        </a>
                    </div>
                    <ul onClick={event => event.stopPropagation()}>
                        <a href={"#advantages"} onClick={() => setIsMobile(false)}>Advantages</a>
                        <a href={"#partners"} onClick={() => setIsMobile(false)}>Partners</a>
                        <a href={"#faq"} onClick={() => setIsMobile(false)}>FAQ</a>
                        <div>
                            <Link to={"/seller/signup"}>
                                <Button onClick={() => setIsMobile(false)} background={"primary"} hover={"primary"} textWeight={"w_600"}>Sign Up</Button>
                            </Link>
                            <Link to={"/seller/login"}>
                                <Button onClick={() => setIsMobile(false)} textWeight={"w_600"} background={"dark"} hover={"dark"}>Log In</Button>
                            </Link>
                        </div>
                    </ul>
                    <div className={isMobile ? "burger active" : "burger"} onClick={(e: React.MouseEvent<any>) => {
                        setIsMobile(prevState => !prevState)
                        e.stopPropagation()
                    }}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;