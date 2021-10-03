import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { 재고context } from './App.js';

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h1`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');
  let 재고 = useContext(재고context);

  useEffect(() => {
    let Timer = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(Timer);
    };
  }, []);

  let { id } = useParams();
  let history = useHistory();
  let findProduct = props.shoes.find(function (Product) {
    return Product.id == id;
  });

  return (
    <div className='container'>
      <박스>
        <제목 className='red'>Detail</제목>
      </박스>
      {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      />

      {alert === true ? (
        <div className='mt-alert'>
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className='row'>
        <div className='col-md-6'>
          <img
            src='https://codingapple1.github.io/shop/shoes1.jpg'
            width='100%'
          />
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <button className='btn btn-danger'>주문하기</button>
          <button
            className='btn btn-danger'
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return <p>재고 : ???</p>;
} 
export default Detail;
