import React, {useState} from 'react';
import styled from "styled-components";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import ProductsApi from '../api/ProductsApi';
import {useParams} from "react-router-dom";
import SliderApi from "../api/SliderApi";


const ImgSection = styled.section`
    position: relative;
    top: 2.5px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 550px;
        height: 450px;
        border-radius: 10px;
    }
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 45%;
  right: 32px;
  font-size: 2rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 45%;
  left: 32px;
  font-size: 2rem;
  color: white;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const EventSlider = (props) => {

    const sliderApi = new SliderApi();
    const mallSliderImg = sliderApi.getMainSliderImg();

    const { subSlides } = props;
    const [current, setCurrent] = useState(0);
    const length = mallSliderImg.length;

    const NextSlides = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlides = () => {
        setCurrent( current === 0 ? length -1 : current -1);
    }

    if(!Array.isArray(subSlides) || subSlides.length <= 0) {
        return null;
    }



    return(
        <ImgSection>
            <RightArrow onClick={NextSlides}/>
            <LeftArrow onClick={prevSlides}/>
            {mallSliderImg.map( (slide, index) => {
                return(
                    <div>
                        <img src={slide.sliderImg} />
                    </div>
                )
            })}
        </ImgSection>
    )

};

export default EventSlider;