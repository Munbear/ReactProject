import React, { useState } from 'react';
import product1 from './product1.jpg';

function Products(props) {
  return (
    <div className='card__list'>
      <img src={product1} className='card__img' />
      <p className='card__title'>{props.product.title}</p>
      <h4 className='card__price'>{props.product.price}</h4>
    </div>
  );
}

export default Products;
