import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './App.css';
import styled from 'styled-components';

import product1 from './images/product5.jpg';
import mall1 from './images/brand2.jpg';
import brand1 from './images/brand1.jpg';

const ListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: solid 1px;
`;

const InfoWrap = styled.div`
  padding: 10px;

  p {
    margin: 0;
  }
`;

const CardBlock = styled.div`
  padding: 10px;

  img {
    width: 100%;
  }
`;

const TagName = styled.p`
  font-size: small;
  color: lightslategray;
`;

const ItemWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const ItemCard = styled.div`
  padding: 8px;

  img {
    width: 100%;
    border-radius: 6%;
    box-shadow: 2px 1px 7px 0px;
  }
`;

const ItemInfo = styled.div`
  display: box;
  position: relative;
  left: 12px;

  p {
    margin: 0;
  }
`;

const Price = styled.p`
  font-weight: bold;
`;

function TabContent(props) {
  let history2 = useHistory();
  if (props.tab === 0) {
    return (
      <ItemWrap
        onClick={() => {
          history2.push('/detail/' + props.product.id);
        }}
      >
        <ItemCard>
          <img src={product1} />
        </ItemCard>
        <ItemInfo>
          <p>{props.product.title}</p>
          <Price>{props.product.price}</Price>
        </ItemInfo>
      </ItemWrap>
    );
  } else if (props.tab === 1) {
    return (
      <ListWrap>
        <InfoWrap>
          <p>{props.mall.rank}</p>
          <h2>{props.mall.title}</h2>
          <TagName>{props.mall.chr}</TagName>
        </InfoWrap>
        <CardBlock>
          <img src={mall1} />
        </CardBlock>
      </ListWrap>
    );
  } else if (props.tab === 2) {
    return (
      <ListWrap>
        <InfoWrap>
          <p>{props.brand.rank}</p>
          <h2>{props.brand.title}</h2>
          <TagName>{props.brand.chr}</TagName>
        </InfoWrap>
        <CardBlock>
          <img src={brand1} />
        </CardBlock>
      </ListWrap>
    );
  }
}

export default TabContent;
