import React, { useState } from 'react';
import './App.css';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { AiFillPushpin } from 'react-icons/ai';

import product5 from './images/product5.jpg';
import ItemInfo from './ItemInfo.js';
import Demo from './Modal.js';

let Header = styled.header`
  position: fixed;
  top: 0;
  width: 550px;
  background-color: black;
`;

let Btn = styled.div`
  border none;
  color : white;
`;

let Paybtn = styled.button`
  width: 495px;
  color: white;
  background: black;
  font-size: 50px;
  border: none;
  cursor: pointer;
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
  let [info, setInfo] = useState(0);

  let findItem = props.product.find((x) => x.id == id);
  return (
    <div>
      <Header>
        <Btn>
          <IoMdArrowBack
            onClick={() => {
              history.push('/');
            }}
            size='24'
            color='white'
          />
        </Btn>
      </Header>
      <div>
        <img src={product5} width='100%' />
      </div>
      <div>
        <Title>{findItem.title}</Title>
        <Price>{findItem.price}</Price>
      </div>
      <nav className='btn__menu'>
        <button
          className='btn pointOn'
          onClick={() => {
            setInfo(0);
          }}
        >
          상품정보
        </button>
        <button
          className='btn pointOn'
          onClick={() => {
            setInfo(1);
          }}
        >
          리뷰
        </button>
        <button
          className='btn pointOn'
          onClick={() => {
            setInfo(2);
          }}
        >
          Q&A
        </button>
      </nav>
      <ItemInfo info={info} />

      <Footer>
        <Pin>
          <AiFillPushpin color='white' size='55' />
        </Pin>
        {/* <Paybtn
          onClick={() => {
            setModal();
          }}
        >
          구매하기
        </Paybtn> */}
        <Demo />
      </Footer>
    </div>
  );
}

export default Detail;
