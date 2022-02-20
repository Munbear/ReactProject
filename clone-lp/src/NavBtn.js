import React from 'react';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { useHistory, Link } from 'react-router-dom';
import Category from './Data/categories';

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
            history.push('/');
          }}
          size='20'
        />
      </Arrow>

      <Div>
        <Button
          onClick={() => {
            props.goToOtherCategory('all');
          }}
        >
          전체
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.TOP);
          }}
        >
          상의
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.OUTER);
          }}
        >
          아우터
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.PANTS);
          }}
        >
          하의
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.SHOES);
          }}
        >
          신발
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.BAG);
          }}
        >
          가방
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.JEWELLERY);
          }}
        >
          악세사리
        </Button>

        <Button
          onClick={() => {
            props.goToOtherCategory(Category.OTHER);
          }}
        >
          기타
        </Button>
      </Div>
    </>
  );
};

export default NavBtn;
