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
import Detail from './Detail.js';
import TabContent from './TabContent';

import logo from './logo.svg';
import box from './box.svg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

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
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <BsBorderAll size='30' />
          </div>
          <div
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <FaTshirt size='40' />
          </div>
          <div
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <GiMonclerJacket
              size='40'
              onClick={() => {
                history.push('/shopping');
              }}
            />
          </div>
          <div
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <GiArmoredPants
              size='40'
              onClick={() => {
                history.push('/shopping');
              }}
            />
          </div>
          <div
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <GiSonicShoes
              size='40'
              onClick={() => {
                history.push('/shopping');
              }}
            />
          </div>
          <div
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <BsHandbag
              size='40'
              onClick={() => {
                history.push('/shopping');
              }}
            />
          </div>
          <div
            className='item__box'
            onClick={() => {
              history.push('/shopping');
            }}
          >
            <VscWatch
              size='40'
              onClick={() => {
                history.push('/shopping');
              }}
            />
          </div>
          <div className='item__box'>
            <RiWalletLine
              size='40'
              onClick={() => {
                history.push('/shopping');
              }}
            />
          </div>
        </div>

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'none' }} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'none' }} />;
}

export default App;
