import './App.css';
import React, { useState } from 'react';
import Data from './data.js';
import brandData from './brandData.js';
import Products from './Products.js';
import Brands from './Brands.js';

import logo from './logo.svg';
import box from './box.svg';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.png';
import img8 from './img8.jpg';
import img9 from './img9.jpg';

import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';

import brand1 from './brand1.jpg';
import brand2 from './brand2.jpg';
import brand3 from './brand3.jpg';

function App() {
  let [brand, setBrand] = useState(brandData);
  let [product, setProduct] = useState(Data);

  return (
    <div className='App'>
      <header className='header'>
        <div className='header__container'>
          <div className='container__logo__box'>
            <a href='https://www.lookpin.co.kr/'>
              <img className='container__logo' src={logo} />
            </a>
          </div>
          <div className='container__box'>
            <img className='=box' src={box} />
          </div>
        </div>
        <div className='search__container'>
          <input
            className='search__input'
            type='text'
            Placeholder='다양한 상품과 브랜드를 검색하세요'
            name=''
            id=''
          />
          {/*여기에 돋보기 아이콘*/}
        </div>
      </header>

      <Eventbar></Eventbar>

      <div className='item__group'>
        <div className='item__all'>ALL</div>
        <div className='item__top'>상의</div>
        <div className='item__jacket'>아우터</div>
        <div className='item__pants'>하의</div>
        <div className='item__shoes'>신발</div>
        <div className='item__makeup'>그루밍</div>
        <div className='item__bag'>가방</div>
        <div className='item__small'>악세사리</div>
        <div className='item__other'>기타</div>
      </div>

      <div className='item__menu'>
        <button className='product'>상품</button>
        <button className='shoping__mall'>쇼핑몰</button>
        <button className='brand'>브랜드</button>
      </div>

      <div className='products__container'>
        {product.map((a, i) => {
          return <Products product={product[i]} i={i}></Products>;
        })}
      </div>

      <div className='brand__container'>
        {brand.map((b, c) => {
          return <Brands brand={brand[c]} c={c}></Brands>;
        })}
      </div>
    </div>
  );
}

function Eventbar() {
  return (
    <div className='event__bar__container'>
      {/* {/* <img className='event__img' src={img1} />
        <img className='event__img' src={img2} />
        <img className='event__img' src={img3} />
        <img className='event__img' src={img4} />
        <img className='event__img' src={img5} />
        <img className='event__img' src={img6} />
        <img className='event__img' src={img7} />
        <img className='event__img' src={img8} /> */}
      <img className='event__img' src={img9} />
    </div>
  );
}

export default App;
