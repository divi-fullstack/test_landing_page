import React from "react"
import Slider from "react-slick";
import img1 from "../../images/image_8.png"
const SlideContent = ({ image }) => {
    return (
        <div className="slide-meet-our-team">
            <div className="slide-meet-our-team-inner" style={{backgroundImage:`url(${image})`}}>
              
            </div>
            <span className="date">22 JUNE</span>
            <div className="inner-content">
            <h6>Lorem Ipsum is dummy text</h6>
            <p>Update your knowledge about healthy life</p>
            </div>
        </div>
    )
}

const SliderHome = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 550,
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
            }
        ]
    };
    return (<Slider {...settings}>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
        <div><SlideContent image={img1} /></div>
    </Slider>)
}

const Section5 = () => {
    return (
        <div className="section5 section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>MEET <span className="underline_heading">OUR</span> TEAM</h1>
                        <p>Professional and Certificated Doctor</p>
                    </div>
                    <div className="col-md-12">
                        <SliderHome />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section5;