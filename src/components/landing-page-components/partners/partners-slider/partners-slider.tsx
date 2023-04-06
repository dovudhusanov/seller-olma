import React from 'react';
import "./partners-style.css"
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PartnersSlider() {
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="partners-slider">
            <Slider {...settings}>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild3433-3663-4939-a231-633265343164__nestle.svg" alt="img"/></div>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild6663-3134-4661-a437-663339396238__pampers_logo.svg" alt="img"/></div>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild3464-3964-4330-a230-303331616563__lenovo_logo_2015.svg" alt="img"/></div>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild3064-6563-4636-a138-333632396265__logo_nike_1.svg" alt="img"/></div>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild3238-3265-4765-b865-356533343830__samsung_logo.svg" alt="img"/></div>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild6163-6565-4663-a564-653862616533__hp_new_logo_2d_1.svg" alt="img"/></div>
                <div className="partners-slider-img"><img src="https://seller.uzum.uz/images/tild6538-3635-4232-b934-343439386338__xiaomi_logo.svg" alt="img"/></div>
            </Slider>
        </div>
    );
}

export default PartnersSlider;