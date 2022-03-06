import React, {useState} from 'react';
import '../App.css';

import ProductsApi from "../api/ProductsApi";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import NavTabBtn from "../components/NavTabBtn";
import MainSlider from "../components/MainSlider";
import ShopApi from "../api/ShopApi";


const Home = () => {

    const productsApi = new ProductsApi();
    const slides = productsApi.getMainSliderImg();

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