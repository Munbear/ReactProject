import './App.css';
import React, { useState } from 'react';
import Data from './data.js';
import brandData from './brandData.js';
import Products from './Products.js';
import Brands from './Brands.js';

import logo from './logo.svg';
import box from './box.svg';

import img9 from './img9.jpg';

function App() {
  let [brand, setBrand] = useState(brandData);
  let [product, setProduct] = useState(Data);
  let [tap, setTap] = useState(0);

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

      <Eventbar />

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
        <button className='product' onClick={() => {}}>
          상품
        </button>
        <button className='shoping__mall'>쇼핑몰</button>
        <button className='brand'>브랜드</button>
      </div>

      <div className='products__container'>
        {product.map((a, i) => {
          return (
            <Products product={product[i]} setTap={setTap} i={i}></Products>
          );
        })}
      </div>

      <div className='brand__container'>
        {brand.map((a, i) => {
          return <Brands brand={brand[i]} i={i}></Brands>;
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
