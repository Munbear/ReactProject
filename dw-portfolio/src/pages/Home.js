import React, {useState} from 'react';
import '../App.css';

import ProductsApi from "../api/ProductsApi";
import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import CategoryMenu from "../components/CategoryMenu";
import NavTabBtn from "../components/NavTabBtn";
import MainSlider from "../components/MainSlider";


const Home = () => {

    const productsApi = new ProductsApi();
    const slides = productsApi.getMainSliderImg();

    return(
        <>
            <Header />
            {/*<SlickSlider/>*/}
            <MainSlider slides={slides}/>
            <CategoryMenu />
            <NavTabBtn />
        </>
    );
};

export default Home;