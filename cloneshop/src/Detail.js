import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import styled from 'styled-components';

function Detail(props) {
  let { id } = useParams();
  let findProdcut = props.shoes.find(function (p) {
    return p.id == id;
  });
  let history = useHistory();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{findProdcut.title}</h4>
          <p>{findProdcut.content}</p>
          <p>{findProdcut.price}</p>
          <button className='btn btn-danger'>주문하기</button>
          <button
            className='btn btn-danger'
            onClick={() => {
              history.push('/');
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
