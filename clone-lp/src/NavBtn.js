import React from 'react';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { useHistory, Link } from 'react-router-dom';

import MenuData from './Data/menuData.js';

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

const NavBtn = (props) => {
  let history = useHistory();
  return (
    <>
      <Arrow>
        <IoMdArrowBack
          onClick={() => {
            history.goBack();
          }}
          size='20'
        />
      </Arrow>

      <Div>
        <Button
          onClick={() => {
            props.setCardMenu(0);
          }}
        >
          전체
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(1);
          }}
        >
          상의
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(2);
          }}
        >
          아우터
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(3);
          }}
        >
          하의
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(4);
          }}
        >
          신발
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(5);
          }}
        >
          가방
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(6);
          }}
        >
          악세사리
        </Button>

        <Button
          onClick={() => {
            props.setCardMenu(7);
          }}
        >
          기타
        </Button>
      </Div>
    </>
  );
};

export default NavBtn;
