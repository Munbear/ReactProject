import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import outerImg from './images/outer1.jpg';

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
  if (props.CardMenu === 0) {
    return (
      <>
        <CardWrap>
          <ImgWrap>
            <img src={outerImg} />
          </ImgWrap>
          <CardInfo>
            <p>{props.findContents.title}</p>
            <CardPrice>{props.findContents.price}</CardPrice>
          </CardInfo>
        </CardWrap>
      </>
    );
  } else if (props.CardMenu === 1) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.top.title}</p>
          <CardPrice>{props.top.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  } else if (props.CardMenu === 2) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.outer.title}</p>
          <CardPrice>{props.outer.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  } else if (props.CardMenu === 3) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.pant.title}</p>
          <CardPrice>{props.pant.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  } else if (props.CardMenu === 4) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.shoes.title}</p>
          <CardPrice>{props.shoes.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  } else if (props.CardMenu === 5) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.bag.title}</p>
          <CardPrice>{props.bag.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  } else if (props.CardMenu === 6) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.jewellery.title}</p>
          <CardPrice>{props.jewellery.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  } else if (props.CardMenu === 7) {
    return (
      <CardWrap>
        <ImgWrap>
          <img src={outerImg} />
        </ImgWrap>
        <CardInfo>
          <p>{props.other.title}</p>
          <CardPrice>{props.other.price}</CardPrice>
        </CardInfo>
      </CardWrap>
    );
  }
};

export default MenuCards;
