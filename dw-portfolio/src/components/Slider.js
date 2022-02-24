import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/sliderImg1.jpg';
import img2 from '../images/sliderImg2.jpg';
import img3 from '../images/sliderImg3.jpg';
import img4 from '../images/sliderImg4.jpg';
import img5 from '../images/sliderImg5.jpg';
import img6 from '../images/sliderImg6.jpg';


const SlickSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <>
            <Slider {...settings}>
                <img src={img1} alt='event products'/>
                <img src={img2} alt='event products'/>
                <img src={img3} alt='event products'/>
                <img src={img4} alt='event products'/>
                <img src={img5} alt='event products'/>
                <img src={img6} alt='event products'/>
            </Slider>
        </>
        )

}

function SampleNextArrow(props) {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: 'none' }} />;
}

function SamplePrevArrow(props) {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: 'none' }} />;
}

export default SlickSlider;