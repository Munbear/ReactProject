import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import logo from './images/logo.svg';
import box from './images/box.svg';

const HeaderColor = styled.header`
  background-color: black;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LookpinLogo = styled.img`
  width: 150px;
`;

const SearchContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 20px 20px 20px 20px;
  border: none;
  font-size: 14px;
  margin-bottom: 10px;
  placeholder= 'alsdkjflas'
`;

const Icon = styled(BsSearch)`
  margin: 0;
  padding: 0;
  position: relative;
  top: 8px;
  right: 20px;
`;

const Header = () => {
  return (
    <>
      <HeaderColor>
        <HeaderContainer>
          <LookpinLogo src={logo} />
          <img src={box} />
        </HeaderContainer>
        <SearchContainer>
          <Input />
          <Icon />
        </SearchContainer>
      </HeaderColor>
    </>
  );
};

export default Header;
