import React, { useState } from 'react';
import product1 from './product1.jpg';

function Products(props) {
  return (
    <div className='products__list'>
      <img src={product1} className='products__img' />
      <p className='products__title'>{props.product.title}</p>
      <h4 className='products__price'>{props.product.price}</h4>
    </div>
  );
}

export default Products;
