import React, {useState} from 'react';
import '../App.css';

import ProductsApi from "../api/ProductsApi";

import Header from "../components/Header";
import SlickSlider from "../components/Slider";
import CategoryMenu from "../components/CategoryMenu";
import NavTabBtn from "../components/NavTabBtn";
import NavTabContents from "../components/NavTabContents";


const Home = () => {

    const productsApi = new ProductsApi();
    let [navTab, setNavTab] = useState(0);
    let [productsItem, setProductsItem] = useState([])

    return(
        <>
            <Header />
            <SlickSlider/>
            <CategoryMenu />
            <NavTabBtn setNavTab={setNavTab}/>
            {productsItem.map( (item, i)=>{
                return<NavTabContents navTab={ navTab }item={item} key={i}/>
            } )}
        </>
    )
}

export default Home;