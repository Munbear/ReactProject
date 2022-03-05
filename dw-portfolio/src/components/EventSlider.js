import React, {useState} from 'react';
import styled from "styled-components";
import ProductsApi from '../api/ProductsApi';
import {useParams} from "react-router-dom";

const ImgSection = styled.section`
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const EventSlider = () => {
    let { event } = useParams();
    const productsApi = new ProductsApi();
    const sliderImg = productsApi.getProductsById(event)
    ;
    console.log(sliderImg);

    return(
        <ImgSection>
            {sliderImg.map( (slide, index) => {
                return(<SliderImg src={slide.eventImg}/> )
            }) }
        </ImgSection>
    )

};

export default EventSlider;