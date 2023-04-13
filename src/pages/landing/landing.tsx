import React, {useEffect} from 'react';
import "./landing.css";
import {
    AboutDeliverySection,
    Cta,
    Features, Footer,
    Navbar,
    Partners,
    Showcase
} from "../../components/landing-page-components";
import Faq from "../../components/landing-page-components/FAQ/faq";
import {ChangeTitle, ScrollTop, ScrollToTop} from "../../middleware";

function Landing() {

    ScrollTop()
    ChangeTitle("Olma Market")

    return (
        <div className="body-wrap">
            <Navbar/>
            <main>
                <Showcase/>
                <Features/>
                <AboutDeliverySection/>
                <Partners />
                <Cta/>
                <Faq />
            </main>
            <Footer/>
            <ScrollToTop />
        </div>
    );
}

export default Landing;