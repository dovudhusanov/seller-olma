import React from 'react';
import { Button , Typography } from '../..';

function AboutDeliverySection() {
    return (
        <section className="pricing section">
            <div className="container-sm">
                <div className="pricing-inner section-inner">
                    <div className="pricing-header text-center">
                        <Typography tag={"h2"} responsive={{md: "h4"}} textWeight={"w_700"} color={"lightText"} textSize={"h2"} style={{zIndex: 10, position: "relative"}}>Olma is a marketplace with guaranteed 1-day
                            delivery, around which thousands of sellers and manufacturers unite across the
                            country</Typography>
                    </div>
                    <div className="pricing-tables-wrap">
                        <div className="pricing-table">
                            <div className="pricing-table-inner is-revealing" data-sr-id="8"
                                 style={{
                                     visibility: "visible",
                                     opacity: 1,
                                     transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1)"
                                 }}>
                                <div className="pricing-table-main">
                                    <h4>Olma has built its own independent system of logistics, storage and issuance of orders.
                                    </h4>
                                    <h4>This allows us to save a profitable marketplace commission for our partners - from 3 to 20% of the amount of sales, while the cost of delivery and other expenses are already included in the commission.
                                    </h4>
                                </div>
                                <div className="pricing-table-cta mb-8">
                                    <Button className={"button-block"} textWeight={"w_600"} background={"primary"} hover={"primary"}>Sign Up now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutDeliverySection;