import React, { useContext, useState } from 'react';
import { GiConsoleController } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import outerImg from './images/outer1.jpg';
import itemsData from './productData.js';

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

let Arrow = styled.button`
  background-color: white;
  border none;
`;

function Shopping(props) {
  let history = useHistory();
  let [items, setItems] = useState(itemsData);
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

      {props.product.map((a, i) => {
        return (
          <div className='tab__cards'>
            <div className='card__img__area'>
              <img src={outerImg} className='card__img' />
            </div>
            <div className='products__info'>
              <p>{props.product[1].title}</p>
              <p>{props.product[1].price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Shopping;
