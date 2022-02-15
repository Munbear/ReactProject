import React from 'react';
import styled from 'styled-components';

const NavWrap = styled.nav`
  display: flex;
  flex: 1 1 40%;
  justify-content: center;
  border-bottom: solid 1px darkgray;
`;

const NavBtn = styled.button`
  background-color: white;
  color: gray;
  flex: 1 1 40%;
  width: 120px;
  height: 50px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    color: black;
    border-bottom: 1px solid black;
    font-weight: bold;
  }
`;

const NavMenu = (props) => {
  return (
    <>
      <NavWrap>
        <NavBtn
          onClick={() => {
            props.setTab(0);
          }}
        >
          상품
        </NavBtn>
        <NavBtn
          onClick={() => {
            props.setTab(1);
          }}
        >
          쇼핑몰
        </NavBtn>
        <NavBtn
          onClick={() => {
            props.setTab(2);
          }}
        >
          브랜드
        </NavBtn>
      </NavWrap>
    </>
  );
};

export default NavMenu;
