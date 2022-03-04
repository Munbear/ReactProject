import React, {useState} from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import ProductsApi from "../api/ProductsApi";


const Mall = () => {

    let [mall, setMall] = useState([]);
    let { id } = useParams();
    const productsApi = new ProductsApi();
    const mallId = productsApi.getMallList(mall);

    console.log(mallId);

    return(
        <>
            <Header/>
            <p>{mallId[1].title}</p>
        </>
    );
};

export default Mall;