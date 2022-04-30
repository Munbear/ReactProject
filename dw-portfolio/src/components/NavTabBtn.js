import React, { useState } from "react";
import styled from "styled-components";
import NavTabContents from "./NavTabContents";

import ProductsApi from "../api/ProductsApi";
import ShopApi from "../api/ShopApi";

const TabWrap = styled.nav`
    display: flex;
    flex: 1 1 40%;
    justify-content: center;
    border-bottom: solid 1px darkgray;
`;

const TabBtn = styled.button`
    background-color: white;
    color: gray;
    flex: 1 1 40%;
    width: 120px;
    height: 50px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in;

    :focus {
        color: black;
        border-bottom: 1px solid black;
        font-weight: bold;
    }
`;

const NavTabBtn = () => {
    let [navTab, setNavTab] = useState(0);

    const productsApi = new ProductsApi();
    const SaleProducts = productsApi.getSaleProducts();

    const shopApi = new ShopApi();
    const mallData = shopApi.getMallList();
    const brandData = shopApi.getBrandList();

    return (
        <>
            <TabWrap>
                <TabBtn
                    onClick={() => {
                        setNavTab(0);
                    }}
                >
                    상품
                </TabBtn>
                <TabBtn
                    onClick={() => {
                        setNavTab(1);
                    }}
                >
                    쇼핑몰
                </TabBtn>
                <TabBtn
                    onClick={() => {
                        setNavTab(2);
                    }}
                >
                    브랜드
                </TabBtn>
            </TabWrap>
            {SaleProducts.map((items, i) => {
                return (
                    <NavTabContents
                        navTab={navTab}
                        items={items}
                        mallData={mallData[i]}
                        brandData={brandData[i]}
                        key={i}
                    />
                );
            })}
        </>
    );
};

export default NavTabBtn;
