import React from 'react';

interface FeaturesCardProps {
    imgSrc: string
    title: string
}

function FeaturesCard({imgSrc, title}: FeaturesCardProps) {
    return (
        <div className="feature text-center is-revealing" style={{visibility: "visible"}}>
            <div className="feature-inner">
                <div className="feature-icon">
                    <img
                        src={imgSrc}
                        alt="Features image"
                    />
                </div>
                <h4 className="feature-title mt-24">{title}</h4>
            </div>
        </div>
    );
}

export default FeaturesCard;