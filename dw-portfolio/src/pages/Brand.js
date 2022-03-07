import React from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import ProductsApi from "../api/ProductsApi";
import EventSlider from "../components/EventSlider";
import SliderApi from "../api/SliderApi";


const Brand = () => {

    const sliderApi = new SliderApi();
    let { shopId } = useParams();
    const findSubSlides = sliderApi.getFindSliderById(shopId);

    console.log(findSubSlides);


    return(
        <>
            <Header />
            <EventSlider findSubSlides={findSubSlides}/>
        </>
    );
};

export default Brand;