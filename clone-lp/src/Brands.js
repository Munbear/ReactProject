import React, { useState } from 'react';
import brand1 from './brand1.jpg';

function Brands(props) {
  return (
    <div className='brand__list'>
      <p>{props.brand.rank}</p>
      <h4>{props.brand.title}</h4>
      <img src={brand1} />
      <hr />
    </div>
  );
}

export default Brands;
