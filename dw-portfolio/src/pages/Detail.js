import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import ProductsApi from "../api/ProductsApi";
import styled from "styled-components";
import DetailHeader from "../components/DetailHeader";



const Detail= () => {
    let { id } = useParams();
    const productsApi = new ProductsApi();
    const productsId = productsApi.getProductsById(id);
    console.log(productsId);

    return(
        <>
            <DetailHeader />
            <img src={productsId.thumnailImage} />
            <p>{productsId.title}</p>
            <p>{productsId.price}</p>
        </>
    );
};


export default Detail;