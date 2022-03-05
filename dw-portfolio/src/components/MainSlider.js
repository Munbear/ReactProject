import React, {useState} from 'react';
import styled from "styled-components";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";
import ProductsApi from "../api/ProductsApi";

const SliderSection = styled.section`
  position: relative;
  top: 2.5px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImgs = styled.img`
  width: 550px;
  height: 450px;
`;

const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 45%;
  right: 32px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 45%;
  left: 32px;
  font-size: 2rem;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;


const MainSlider = (props) => {
    const productsApi = new ProductsApi();
    const mainSlider = productsApi.getMainSliderImg();

    const { slides } = props;

    const [current, setCurrent] = useState(0);
    const length = mainSlider.length;

    const NextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent( current === 0 ? length -1 : current -1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return(
        <SliderSection>
            <RightArrow onClick={NextSlide}/>
            <LeftArrow onClick={prevSlide}/>
            {mainSlider.map( (slide, index) => {
                return(
                    <div>
                        { index === current && (<SliderImgs src={slide.sliderImg} />) }
                    </div>

                );
            })}
        </SliderSection>
    );
};

export default MainSlider;