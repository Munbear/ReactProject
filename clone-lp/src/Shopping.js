import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import outerImg from './images/outer1.jpg';

let Div = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid darkgray;
  padding: 15button;
`;

let Button = styled.button`
  background-color white;
  color: darkgray;
  border : none;
  cursor: pointer;
  padding : 15px;
  font-size : large;

  &:hover {
    color: black;
    border-bottom: 1px solid black;
    font-weight: 700:
  }
`;

function Shopping(props) {
  return (
    <div>
      <Div>
        <Button>전체</Button>
        <Button>상의</Button>
        <Button>아우터</Button>
        <Button>하의</Button>
        <Button>신발</Button>
        <Button>가방</Button>
        <Button>악세사리</Button>
        <Button>기타</Button>
      </Div>
      <TabProducts />
      <p>{props.product[1].title}</p>
    </div>
  );
}

function TabProducts(props) {
  return (
    <div className='tab__cards__list'>
      <div className='tab__cards'>
        <img src={outerImg} width='100%' />
      </div>
      <div className='items__info'>
        <p>상품명</p>
        <p>상품 가격</p>
      </div>
    </div>
  );
}

export default Shopping;
