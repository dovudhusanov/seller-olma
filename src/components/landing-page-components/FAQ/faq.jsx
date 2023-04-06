import React from 'react';
import "./faq.css"
import {Typography} from "../..";
import {FAQData} from "./data";

function Faq() {
    return (
        <div className="container" id={"faq"}>
            <div className={"faq"}>
                <Typography textSize={"h2"} responsive={{md: "h3"}} textWeight={"w_600"} tag={"h2"} color={"lightText"}>Frequently asked the questions</Typography>
                {FAQData.map(item => (
                    <div className="faq-drawer" key={item.id}>
                        <input className="faq-drawer__trigger" id={`faq-drawer-${item.id}`} type="checkbox"/><label
                        className="faq-drawer__title" htmlFor={`faq-drawer-${item.id}`}>{item.question}</label>
                        <div className="faq-drawer__content-wrapper">
                            <div className="faq-drawer__content">
                                <Typography tag={"p"} textSize={"h6"} textWeight={"w_400"} color={"lightGray"}>
                                    {item.answer}
                                </Typography>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;