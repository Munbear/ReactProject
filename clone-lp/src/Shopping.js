import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import outerImg from './images/outer1.jpg';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid darkgray;
  padding: 15button;
`;

const Button = styled.button`
  background-color: white;
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

const Arrow = styled.button`
  background-color: white;
  border none;
`;

const CardWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const CardInfo = styled.div`
  display: box;
  position: relative;
  left: 12px;

  p {
    margin: 0;
  }
`;

const ImgWrap = styled.div`
  padding: 8px;

  img {
    width: 100%;
    border-radius: 6%;
    box-shadow: 2px 1px 7px 0px;
  }
`;

const CardPrice = styled.p`
  font-weight: bold;
`;

function Shopping(props) {
  let history = useHistory();
  return (
    <div>
      <div>
        <Arrow>
          <IoMdArrowBack
            onClick={() => {
              history.goBack();
            }}
            size='20'
          />
        </Arrow>
      </div>
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

      {props.top.map((a, i) => {
        return (
          <CardWrap>
            <ImgWrap>
              <img src={outerImg} />
            </ImgWrap>
            <CardInfo>
              <p>{props.top[i].title}</p>
              <CardPrice>{props.top[i].price}</CardPrice>
            </CardInfo>
          </CardWrap>
        );
      })}
    </div>
  );
}

export default Shopping;
