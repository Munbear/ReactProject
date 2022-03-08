import React from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useNavigate, useParams} from "react-router-dom";
import ProductsApi from "../api/ProductsApi";
import EventSlider from "../components/EventSlider";
import SliderApi from "../api/SliderApi";


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

const Brand = () => {

    const sliderApi = new SliderApi();
    const productsApi = new ProductsApi();

    let { shopId } = useParams();

    const findSubSlides = sliderApi.getFindSliderById(shopId);
    const findShopItems = productsApi.getFindShopItems(shopId);
    const navigate = useNavigate();

    return(
        <>
            <Header />
            <EventSlider findSubSlides={findSubSlides}/>
            <nav>
                <h2>브랜드 상품</h2>
            </nav>
            {findShopItems.map( (items, index) => {
                return(
                    <ItemsWrap onClick={ () => {
                        navigate('/detail/' + items.id);
                    }}>
                        <ItemImgCard>
                            <img src={items.thumnailImage}/>
                        </ItemImgCard>
                        <h3>{items.title}</h3>
                        <p>{items.price}</p>
                    </ItemsWrap>
                );
            })}
        </>
    );
};

export default Brand;