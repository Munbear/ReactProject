import React, { useState } from 'react';
import './App.css';
import reactRouterDom from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { BsInboxes } from 'react-icons/bs';
import { AiFillPushpin } from 'react-icons/ai';

import product1 from './images/product1.jpg';

let Basket = styled.header`
  display: flex;
  justify-content: space-between;
`;

let Arrow = styled.button`
  background-color: white;
  border none;
`;

let Paybtn = styled.button`
  width: 495px;
  color: white;
  background: black;
  font-size: 50px;
  border: none;
`;

let Footer = styled.footer`
  width: 550px;
  display: flex;
  position: fixed;
  bottom: 0;
`;

let Pin = styled.div`
  background-color: lightgray;
  width: 55px;
  height: 65px;
`;

let Price = styled.p`
  font-size: 50px;
  font-weight: bold;
`;

let Title = styled.p`
  font-size: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();

  let findItem = props.product.find((x) => x.id == id);
  return (
    <div>
      <Basket>
        <div>
          <Arrow>
            <IoMdArrowBack
              onClick={() => {
                history.push('/');
              }}
              size='24'
            />
          </Arrow>
        </div>
        <div>
          <BsInboxes size='24'></BsInboxes>
        </div>
      </Basket>
      <div>
        <img src={product1} width='100%' />
      </div>
      <div>
        <Title>{findItem.title}</Title>
        <Price>{findItem.price}</Price>
      </div>
      <nav className='btn__menu'>
        <button className='btn pointOn'>상품정보</button>
        <button className='btn pointOn'>리뷰</button>
        <button className='btn pointOn'>Q&A</button>
      </nav>
      <Footer>
        <Pin>
          <AiFillPushpin color='white' size='55' />
        </Pin>
        <Paybtn>구매하기</Paybtn>
      </Footer>
    </div>
  );
}

export default Detail;
