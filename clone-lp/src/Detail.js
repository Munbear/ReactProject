import React, { useState } from 'react';
import reactRouterDom from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { BsInboxes } from 'react-icons/bs';

import product1 from './images/product1.jpg';

let Arrow = styled.button`
  background-color: white;
  border none;
`;
function Detail(props) {
  let { id } = useParams();
  let history = useHistory();

  let findItem = props.product.find((x) => x.id == id);
  return (
    <div>
      <header className='deteail__header'>
        <div>
          <Arrow>
            <IoMdArrowBack
              onClick={() => {
                history.push('/');
              }}
              size='24'
            />
          </Arrow>
        </div>
        <div>
          <BsInboxes size='24'></BsInboxes>
        </div>
      </header>
      <div>
        <img src={product1} width='100%' />
      </div>
      <div>
        <p>{findItem.title}</p>
        <p>{findItem.price}</p>
      </div>
    </div>
  );
}

export default Detail;
