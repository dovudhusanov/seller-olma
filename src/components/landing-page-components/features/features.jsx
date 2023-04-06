import React from 'react';
import FeaturesCard from "./features-card/features-card";
import {FeaturesCardData} from "./data";

function Features() {
    return (
        <section className="features section" id={"advantages"}>
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        {FeaturesCardData.map(item => (
                            <FeaturesCard key={item.id} imgSrc={item.imgSrc} title={item.title} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;