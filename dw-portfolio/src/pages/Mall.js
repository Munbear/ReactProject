import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import ProductsApi from "../api/ProductsApi";
import EventSlider from "../components/EventSlider";


const Mall = () => {

    let { id } = useParams();
    const productsApi = new ProductsApi();
    const mallId = productsApi.getProductsById(id);
    console.log(mallId);

    return(
        <>
            <Header/>
            <EventSlider mallId={mallId}/>
            <h1>{mallId.title}</h1>
        </>
    );
};

export default Mall;