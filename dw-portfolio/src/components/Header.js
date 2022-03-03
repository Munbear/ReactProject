import React from "react";
import styled from 'styled-components';
import { GiShoppingCart as ShoppingCart } from 'react-icons/gi';

const HeaderWrap = styled.header`
  background-color: black;
  display: flex;
  posistion: fixed;
  justify-content: space-around;
  top: 0;
  
  h1 {
    color: white;
    margin: 0px 5px 5px 0px;
  }
`
const InputBox = styled.input`
  width: 60%;
  height: 30px;
  margin-top: 6px;
  border-radius: 20px 20px 20px 20px;
  border: none;
  font-size: 14px;
  margin-bottom: 0px;
  outline: 0;
`;


const Header = () => {
    return(
        <>
            <HeaderWrap>
                <h1>ReactShop</h1>
                <InputBox/>
                <ShoppingCart color="white" size="30px" margin-top="10px"/>
            </HeaderWrap>
        </>
    );
};

export default Header;