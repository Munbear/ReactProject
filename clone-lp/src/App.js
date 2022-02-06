import './App.css';
import { Route } from 'react-router-dom';
import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import productData from './productData.js';
import mallsData from './mallData.js';
import brandData from './brandData';

import Shopping from './Shopping.js';
import Detail from './Detail.js';
import TabContent from './TabContent';
import Header from './Header.js';
import ItemGroup from './ItemGroup.js';
import SlickSlider from './SlickSlider.js';

function App() {
  let [mall, setMall] = useState(mallsData);
  let [product, setProduct] = useState(productData);
  let [brand, setBrand] = useState(brandData);
  let [tab, setTab] = useState(0);

  return (
    <div className='App'>
      <Route exact path='/'>
        <Header />
        <SlickSlider></SlickSlider>
        <ItemGroup />

        <nav className='btn__menu'>
          <button
            className='btn pointOn'
            onClick={() => {
              setTab(0);
            }}
          >
            상품
          </button>
          <button
            className='btn pointOn'
            onClick={() => {
              setTab(1);
            }}
          >
            쇼핑몰
          </button>
          <button
            className='btn pointOn'
            onClick={() => {
              setTab(2);
            }}
          >
            브랜드
          </button>
        </nav>

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

      <Route path='/shopping/'>
        {/* 쇼핑 뒤에 :id 처럼 부여서 다른 페이지 보여주게하기*/}
        <Shopping product={product} />
      </Route>

      <Route path='/detail/:id'>
        <Detail product={product} />
      </Route>
    </div>
  );
}

export default App;
