import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import outerImg from './images/outer1.jpg';

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

let cardContainer = styled.div`
  width : 50%
  display : inline-block;
`;

function Shopping(props) {
  let testItem = useSelector((state) => state);
  console.log(testItem);

  return (
    <div>
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

      <cadrContainer>
        {props.product.map((a, i) => {
          return (
            <div className='tab__cards'>
              <img src={outerImg} width='100%' />
              <p>{props.product[1].title}</p>
              <p>{props.product[1].price}</p>
            </div>
          );
        })}
      </cadrContainer>
    </div>
  );
}

{
  /* <div className='items__info'>
<p>{props.product[1].title}</p>
<p>{props.product[1].price}</p>
</div> */
}

// function Store(state) {
//   return { state: state };
// }

// export default connect(Store)(Shopping);

export default Shopping;
