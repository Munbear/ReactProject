import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import EventSlider from "../components/EventSlider";
import ShopApi from "../api/ShopApi";
import SliderApi from "../api/SliderApi";



const Mall = () => {

    const sliderApi = new SliderApi();
    const subSlides = sliderApi.getMainSliderImg();
    return(
        <>
            <Header/>
            <EventSlider subSlides={subSlides}/>
        </>
    );
};

export default Mall;

