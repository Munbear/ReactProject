import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './App.css';
import product1 from './images/product5.jpg';
import mall1 from './images/brand2.jpg';
import brand1 from './images/brand1.jpg';

function TabContent(props) {
  let history2 = useHistory();
  if (props.tab === 0) {
    return (
      <div
        className='products__list'
        onClick={() => {
          history2.push('/detail/' + props.product.id);
        }}
      >
        <div className='products__card'>
          <img src={product1} className='items__img' width='100%' />
        </div>
        <div className='products__info'>
          <p className='products__title'>{props.product.title}</p>
          <p className='products__price'>{props.product.price}</p>
        </div>
      </div>
    );
  } else if (props.tab === 1) {
    return (
      <div className='mall__list'>
        <div className='mall__info'>
          <p className='mall__rank'>{props.mall.rank}</p>
          <h2 className='mall__title'>{props.mall.title}</h2>
          <p className='title__tag'>{props.mall.chr}</p>
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
          <p className='title__tag'>{props.brand.chr}</p>
        </div>
        <div className='brand__card'>
          <img className='brand__img' src={brand1} />
        </div>
      </div>
    );
  }
}

export default TabContent;
