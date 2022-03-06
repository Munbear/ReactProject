import React, {useState} from 'react';
import '../App.css';

import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import NavTabBtn from "../components/NavTabBtn";
import MainSlider from "../components/MainSlider";
import SliderApi from "../api/SliderApi";


const Home = () => {

    const sliderApi = new SliderApi();
    const slides = sliderApi.getMainSliderImg();

    return(
        <>
            <Header />
            <MainSlider slides={slides}/>
            <CategoryMenu />
            <NavTabBtn />
        </>
    );
};

export default Home;