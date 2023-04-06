import React from 'react';
import {
    AboutDeliverySection,
    Cta,
    Features,
    Footer,
    Navbar,
    Partners,
    Showcase
} from "./components/landing-page-components";
import Faq from "./components/landing-page-components/FAQ/faq";

function App() {
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
        </div>
    );
}

export default App;