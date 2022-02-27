import React, { useState } from 'react';
import styled from "styled-components";
import NavTabContents from "./NavTabContents";

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
  
  :hover {
    color: black;
    border-bottom: 1px solid black;
    font-weight: bold;
  }
`;

const NavTabBtn = () => {
    const [productsItem, setProductsItem] = useState([]);
    let [navTab, setNavTab] = useState(0);

    return(
        <>
            <TabWrap>
                <TabBtn onClick={ () => {
                    setNavTab(0);
                }}>상품</TabBtn>
                <TabBtn onClick={ () => {
                    setNavTab(1);
                }}>쇼핑몰</TabBtn>
                <TabBtn onClick={ () => {
                    setNavTab(2);
                }}>브랜드</TabBtn>
            </TabWrap>
        </>
    )
}

export default NavTabBtn;