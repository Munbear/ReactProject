import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import productData from './productData.js';
import mallsData from './mallData.js';
import brandData from './brandData.js';
import topData from './topData.js';
import pantsData from './pantsData.js';

import ShoppingList from './shoppingList.js';
import Detail from './Detail.js';
import TabContent from './TabContent';
import Header from './Header.js';
import ItemGroup from './ItemGroup.js';
import SlickSlider from './SlickSlider.js';

const NavMenu = styled.nav`
  display: flex;
  flex: 1 1 40%;
  justify-content: center;
  border-bottom: solid 1px darkgray;
`;

const NavBtn = styled.button`
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

function App() {
  let [mall, setMall] = useState(mallsData);
  let [product, setProduct] = useState(productData);
  let [brand, setBrand] = useState(brandData);
  let [tab, setTab] = useState(0);

  return (
    <div className='App'>
      <Route exact path='/'>
        <Header />
        <SlickSlider />
        <ItemGroup />

        <NavMenu>
          <NavBtn
            onClick={() => {
              setTab(0);
            }}
          >
            상품
          </NavBtn>
          <NavBtn
            onClick={() => {
              setTab(1);
            }}
          >
            쇼핑몰
          </NavBtn>
          <NavBtn
            onClick={() => {
              setTab(2);
            }}
          >
            브랜드
          </NavBtn>
        </NavMenu>

        {product.map((a, i) => {
          return (
            <TabContent
              tab={tab}
              product={product[i]}
              mall={mall[i]}
              brand={brand[i]}
              i={i}
              key={i}
            />
          );
        })}
      </Route>
      <Switch>
        <Route path='/shopping/:id'>
          {/* 쇼핑 뒤에 :id 처럼 부여서 다른 페이지 보여주게하기*/}
          <ShoppingList />
        </Route>

        <Route path='/detail/:id'>
          <Detail product={product} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
