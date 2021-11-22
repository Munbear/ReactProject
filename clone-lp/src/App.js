import './App.css';
import { Link, Route, Switch, Routers } from 'react-router-dom';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BsBorderAll, BsHandbag, BsSearch } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

import productData from './productData.js';
import mallsData from './mallData.js';
import brandData from './brandData';
import Shopping from './Shopping.js';

import logo from './logo.svg';
import box from './box.svg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

import product1 from './product1.jpg';
import mall1 from './mall1.jpg';
import brand1 from './brand1.jpg';

function App() {
  let [mall, setMall] = useState(mallsData);
  let [product, setProduct] = useState(productData);
  let [brand, setBrand] = useState(brandData);
  let [tab, setTab] = useState(0);
  let history = useHistory();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='App'>
      <Route exact path='/'>
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
            <BsSearch className='search__icon' />
          </div>
        </header>

        <Slider {...settings}>
          <img src={img1} alt='' />
          <img src={img2} alt='' />
          <img src={img3} alt='' />
          <img src={img4} alt='' />
          <img src={img5} alt='' />
          <img src={img6} alt='' />
        </Slider>

        <div className='item__group'>
          <div
            className='item__all'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <BsBorderAll size='30' />
          </div>
          <div className='item__top'>
            <FaTshirt size='40' />
          </div>
          <div className='item__jacket'>
            <GiMonclerJacket size='40' />
          </div>
          <div className='item__pants'>
            <GiArmoredPants size='40' />
          </div>
          <div className='item__shoes'>
            <GiSonicShoes size='40' />
          </div>
          <div className='item__bag'>
            <BsHandbag size='40' />
          </div>
          <div className='item__small'>
            <VscWatch size='40' />
          </div>
          <div className='item__other'>
            <RiWalletLine size='40' />
          </div>
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
              key={i}
            />
          );
        })}
      </Route>

      <Route path='/shopping'>
        <Shopping />
      </Route>
    </div>
  );
}

function TabContent(props) {
  if (props.tab === 0) {
    return (
      <div className='products__list'>
        <div className='products__card'>
          <img src={product1} width='100%' />
          <p className='products__title'>{props.product.title}</p>
          <h4 className='products__price'>{props.product.price}</h4>
        </div>
      </div>
    );
  } else if (props.tab === 1) {
    return (
      <div className='mall__list'>
        <div className='mall__info'>
          <p className='mall__rank'>{props.mall.rank}</p>
          <h2 className='mall__title'>{props.mall.title}</h2>
        </div>
        <div className='mall__card'>
          <img className='mall__img' src={mall1} width='100%' />
        </div>
      </div>
    );
  } else if (props.tab === 2) {
    return (
      <div className='brand__list'>
        <div className='brand__info'>
          <p className='brand__rank'>{props.brand.rank}</p>
          <h2 className='brand__title'>{props.brand.title}</h2>
        </div>
        <div className='brand__card'>
          <img className='brand__img' src={brand1} />
        </div>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'none' }} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'none' }} />;
}

export default App;
