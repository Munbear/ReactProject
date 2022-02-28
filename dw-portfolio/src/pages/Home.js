import React, {useState} from 'react';
import '../App.css';

import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import CategoryMenu from "../components/CategoryMenu";
import NavTabBtn from "../components/NavTabBtn";


const Home = () => {
    return(
        <>
            <Header />
            <SlickSlider/>
            <CategoryMenu />
            <NavTabBtn />
        </>
    );
};

export default Home;