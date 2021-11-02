import React, { useState } from 'react';
import brand1 from './brand1.jpg';

function Brand(props) {
  return (
    <div className='brand__list'>
      <p className='brand__rank'>{props.brand.rank}</p>
      <h4 className='bradn__title'>{props.brand.title}</h4>
      <img className='brand__img' src={brand1} />
      <hr />
    </div>
  );
}

export default Brand;
