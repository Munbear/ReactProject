import React, { useState } from 'react';
import mall1 from './mall1.jpg';

function Malls(props) {
  return (
    <div className='mall__list'>
      <p className='mall__rank'>{props.mall.rank}</p>
      <h4 className='mall__title'>{props.mall.title}</h4>
      <img className='mall__img' src={mall1} />
      <hr />
    </div>
  );
}

export default Malls;
