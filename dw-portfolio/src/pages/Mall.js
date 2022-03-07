import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import EventSlider from "../components/EventSlider";
import SliderApi from "../api/SliderApi";
import ProductsApi from "../api/ProductsApi";



const ItemsWrap = styled.div`
    display: inline-block;
    width: 50%;
    align-items: center;
    
    h3{
        padding-left: 10px;
    }
    
    p{
        padding-left: 10px;
    }
`;

const ItemImgCard =styled.div`
    justify-content: center;
    align-items: center;
    width: 255px;
    height: 255px;
    padding: 10px;
  
    img{
        width: 100%;
        height: 100%;
        
    }
`;


const Mall = () => {

    const sliderApi = new SliderApi();
    const productsApi = new ProductsApi();

    let { shopId } = useParams();

    const findSubSlides = sliderApi.getFindSliderById(shopId);
    const findShopItems = productsApi.getFindShopItems(shopId);
    console.log(findShopItems);

    return(
        <>
            <Header/>
            <EventSlider findSubSlides={findSubSlides}/>
            <nav>
                <h2>쇼핑몰 상품</h2>
            </nav>
                {findShopItems.map( (items, index) => {
                    return(
                        <ItemsWrap>
                            <ItemImgCard>
                                <img src={items.shopItems}/>
                            </ItemImgCard>
                            <h3>{items.title}</h3>
                            <p>{items.price}</p>
                        </ItemsWrap>
                    );
                })}
        </>
    );
};

export default Mall;

