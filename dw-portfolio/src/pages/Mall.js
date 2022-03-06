import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import EventSlider from "../components/EventSlider";
import shopApi from "../api/ShopApi";


const Mall = () => {

    let { shop } = useParams();
    const mallId = shopApi.getShopById(shop);
    return(
        <>
            <Header/>
            <EventSlider mallId={mallId}/>
            <h1>{mallId.title}</h1>

        </>
    );
};

export default Mall;

