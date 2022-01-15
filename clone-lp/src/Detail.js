import React, { useState } from 'react';
import './App.css';
import reactRouterDom from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
// import { BsInboxes } from 'react-icons/bs';
import { AiFillPushpin } from 'react-icons/ai';

import product5 from './images/product5.jpg';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';
import item5 from './images/item5.jpg';

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

let Foto = styled.img`
  width: 100%;
`;

let Card = styled.div`
  padding-bottom: 50px;
`;

let Review = styled.div`
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100px;

  background-color: #f9f9fa;
  color: #868e96;
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
      <Iteminfo info={info} />

      <Footer>
        <Pin>
          <AiFillPushpin color='white' size='55' />
        </Pin>
        <Paybtn>구매하기</Paybtn>
      </Footer>
    </div>
  );
}

function Iteminfo(props) {
  if (props.info === 0) {
    return (
      <div>
        <Card>
          <Foto src={item1} />
        </Card>
        <Card>
          <Foto src={item2} />
        </Card>
        <Card>
          <Foto src={item3} />
        </Card>
        <Card>
          <Foto src={item4} />
        </Card>
        <Card>
          <Foto src={item5} />
        </Card>
      </div>
    );
  } else if (props.info === 1) {
    return (
      <div>
        <Review>구매후기가 없습니다.</Review>
      </div>
    );
  }
}

export default Detail;
