import React from "react"
import Slider from "react-slick";

const SlideContent = () => {
    return (
        <div className="slide-section1">
            <div className="slide-section1-inner">
                <h1>WE CARE ABOUT YOUR HEALTH</h1>
                <p>Lorem ipsum is simple dummy text of the printing and typesetting industry.</p>
                <button>FREE CONSULTATION</button>
            </div>
        </div>
    )
}

const SliderHome = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (<Slider {...settings}>
        <div><SlideContent /></div>
        <div><SlideContent /></div>
        <div><SlideContent /></div>
    </Slider>)
}

const Section1 = () => {
    return (
        <div className="section1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="slide-section1-wrapper">
                            <div className="row">
                                <div className="col-md-12">
                                    <SliderHome />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section1;


