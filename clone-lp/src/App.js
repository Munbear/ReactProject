import './App.css';
import React, { useState } from 'react';

import productData from './productData.js';
import mallsData from './mallData.js';
import brandData from './brandData';

import logo from './logo.svg';
import box from './box.svg';
import img9 from './img9.jpg';

import product1 from './product1.jpg';
import mall1 from './mall1.jpg';
import brand1 from './brand1.jpg';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';

function App() {
  let [mall, setMall] = useState(mallsData);
  let [product, setProduct] = useState(productData);
  let [brand, setBrand] = useState(brandData);

  let [tab, setTab] = useState(0);

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
        <button
          className='product'
          onClick={() => {
            setTab(0);
          }}
        >
          상품
        </button>
        <button
          className='shoping__mall'
          onClick={() => {
            setTab(1);
          }}
        >
          쇼핑몰
        </button>
        <button
          className='brand'
          onClick={() => {
            setTab(2);
          }}
        >
          브랜드
        </button>
      </div>

      {product.map((a, i) => {
        return (
          <TabContent
            tab={tab}
            product={product[i]}
            mall={mall[i]}
            brand={brand[i]}
            i={i}
          />
        );
      })}
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

function TabContent(props) {
  if (props.tab === 0) {
    return (
      <div className='products__list'>
        <img src={product1} width='100%' />
        <p className='products__title'>{props.product.title}</p>
        <h4 className='products__price'>{props.product.price}</h4>
      </div>
    );
  } else if (props.tab === 1) {
    return (
      <div className='mall__list'>
        <p className='mall__rank'>{props.mall.rank}</p>
        <h4 className='mall__title'>{props.mall.title}</h4>
        <img className='mall__img' src={mall1} />
        <hr />
      </div>
    );
  } else if (props.tab === 2) {
    return (
      <div className='brand__list'>
        <p className='brand__rank'>{props.brand.rank}</p>
        <h4 className='bradn__title'>{props.brand.title}</h4>
        <img className='brand__img' src={brand1} />
        <hr />
      </div>
    );
  }
}

export default App;
