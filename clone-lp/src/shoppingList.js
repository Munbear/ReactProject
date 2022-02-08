import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import MenuCards from './MenuCards.js';

import allData from './allData.js';
import topData from './topData.js';
import pantsData from './pantsData.js';
import outerData from './outerData.js';
import shoesData from './shoesData.js';
import jewelleryData from './jewelleryData.js';
import otherData from './otherData.js';
import bagData from './bagData.js';

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

const ShoppingList = (props) => {
  let [CardMenu, setCardMenu] = useState(0);

  let [all, setAll] = useState(allData);
  let [top, setTopData] = useState(topData);
  let [outer, setOuter] = useState(outerData);
  let [pant, setPantData] = useState(pantsData);
  let [bag, setBagData] = useState(bagData);
  let [jewellery, setJewelleryData] = useState(jewelleryData);
  let [other, setOtherData] = useState(otherData);
  let [shoes, setShoesData] = useState(shoesData);

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
        <Button
          onClick={() => {
            setCardMenu(0);
          }}
        >
          전체
        </Button>
        <Button
          onClick={() => {
            setCardMenu(1);
          }}
        >
          상의
        </Button>
        <Button
          onClick={() => {
            setCardMenu(2);
          }}
        >
          아우터
        </Button>
        <Button
          onClick={() => {
            setCardMenu(3);
          }}
        >
          하의
        </Button>
        <Button
          onClick={() => {
            setCardMenu(4);
          }}
        >
          신발
        </Button>
        <Button
          onClick={() => {
            setCardMenu(5);
          }}
        >
          가방
        </Button>
        <Button
          onClick={() => {
            setCardMenu(6);
          }}
        >
          악세사리
        </Button>
        <Button
          onClick={() => {
            setCardMenu(7);
          }}
        >
          기타
        </Button>
      </Div>
      {top.map((a, i) => {
        return (
          <MenuCards
            CardMenu={CardMenu}
            all={all[i]}
            top={top[i]}
            pant={pant[i]}
            bag={bag[i]}
            outer={outer[i]}
            jewellery={jewellery[i]}
            shoes={shoes[i]}
            other={other[i]}
            i={i}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default ShoppingList;
