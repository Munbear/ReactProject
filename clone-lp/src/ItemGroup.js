import React from 'react';
import { useHistory, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { BsBorderAll } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

const ItemMenue = styled.div`
  display: flex;
  overflow: auto;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  flex: 0 0 auto;
  margin: 10px;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

const ItemGroup = () => {
  let history = useHistory();
  return (
    <ItemMenue>
      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <BsBorderAll size='30' />
      </ItemBox>

      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <FaTshirt size='40' />
      </ItemBox>

      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <GiMonclerJacket size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <GiArmoredPants size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <GiSonicShoes size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <VscWatch size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping');
        }}
      >
        <RiWalletLine size='40' />
      </ItemBox>
    </ItemMenue>
  );
};

export default ItemGroup;
