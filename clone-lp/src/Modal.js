import React from 'react';
import styled from 'styled-components';

let Modalcontainer = styled.div`
  display: flex;
  background-color: pink;
  width: 100%;
  height: 100px;
`;

function Modal(props) {
  if (props.modal === false)
    return (
      <Modalcontainer>
        <div>
          <select name='' id=''>
            <option value=''>M</option>
            <option value=''>L</option>
            <option value=''>XL</option>
          </select>
          <button>취소</button>
          <button>구매하기</button>
        </div>
      </Modalcontainer>
    );
}

export default Modal;
