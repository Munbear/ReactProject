import React from 'react';
import styled from "styled-components";

import ProductsApi from "../api/ProductsApi";


const ItemWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const ItemImg = styled.div`
  padding: 8px;
  
  img {
    width: 100%;
    border-radius: 6%;
    box-shadow: 2px 1px 7px 0px;
  }
`;

const InfoWrap = styled.div`
  display: -moz-box;
  position: relative;
  left: 12px;
  
  p {
    margin: 0;
  }
`;

const ItemPrice = styled.p`
  font-weight: bold;
`;

const BrandListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: solid 1px;
`;

const BrandInfo = styled.div`
  padding: 10px;
  
  p {
    margin: 0;
  }
`;


const NavTabContents = (props) => {

    const productsApi = new ProductsApi();
    let brandList = productsApi.getBrandList();

    const { items } = props;


    if (props.navTab === 0) {
        return(
            <ItemWrap>
                <ItemImg>
                    <img src={items.thumnailImage}/>
                </ItemImg>
                <InfoWrap>
                    <p>{items.title}</p>
                    <ItemPrice>{items.price}</ItemPrice>
                </InfoWrap>
            </ItemWrap>
        );
    } else if ( props.navTab === 1) {
        return (
            <h1>this is page 2</h1>
        );
    } else if (props.navTab === 2) {
        return (
            <h1>this is page 3</h1>
        );
    };
};

export default NavTabContents;