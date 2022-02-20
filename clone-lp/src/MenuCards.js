import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

import outerImg from './img/outer6.jpeg';
import shoesImg from './img/shoes.jpg';
import bagImg from './img/bagpack.jpg';
import pantImg from './img/pant.jpg';
import jewelleryImg from './img/jewellery.jpg';
import topImg from './img/top.jpg';
import otherImg from './img/other.jpg';
import allImg from './img/all.jpg';

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

const MenuCards = (props) => {
  let history = useHistory();

  const { product } = props;

  return (
    <CardWrap
      onClick={() => {
        history.push('/detailpage/' + product.productsN);
      }}
    >
      <ImgWrap>
        <img src={'http://localhost:3000' + product.thumnailImage} />
      </ImgWrap>
      <CardInfo>
        <p>{product.title}</p>
        <CardPrice>{product.price}</CardPrice>
      </CardInfo>
    </CardWrap>
  );
};

export default MenuCards;
