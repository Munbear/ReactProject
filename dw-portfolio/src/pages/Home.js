import React from 'react';
import '../App.css';
import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import CategoryMenu from "../components/CategoryMenu";


const Home = () => {
    return(
        <>
            <Header />
            <SlickSlider/>
            <CategoryMenu />
        </>
    )
}

export default Home;