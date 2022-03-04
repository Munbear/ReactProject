import React from 'react';
import styled from "styled-components";
import Header from "../components/Header";
import {useParams} from "react-router-dom";
import ProductsApi from "../api/ProductsApi";


const Brand = () => {
    let { id } = useParams();
    const productsApi = new ProductsApi();
    const brandId = productsApi.getBrandList(id);

    return(
        <>
            <Header />
            <p>{brandId[0].title}</p>
        </>
    );
};

export default Brand;