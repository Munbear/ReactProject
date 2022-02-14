import React from 'react';
import { useHistory, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { BsBorderAll, BsBagFill } from 'react-icons/bs';
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
        id='all'
        onClick={() => {
          history.push('/shopping/all');
        }}
      >
        <BsBorderAll size='30' />
      </ItemBox>

      <ItemBox
        id='top'
        onClick={() => {
          history.push('/shopping/top');
        }}
      >
        <FaTshirt size='40' />
      </ItemBox>

      <ItemBox
        id='outer'
        onClick={() => {
          history.push('/shopping/outer');
        }}
      >
        <GiMonclerJacket size='40' />
      </ItemBox>
      <ItemBox
        id='pant'
        onClick={() => {
          history.push('/shopping/pant');
        }}
      >
        <GiArmoredPants size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping/shoes');
        }}
      >
        <GiSonicShoes size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping/bag');
        }}
      >
        <BsBagFill size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping/jewellery');
        }}
      >
        <VscWatch size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping/otherthing');
        }}
      >
        <RiWalletLine size='40' />
      </ItemBox>
    </ItemMenue>
  );
};

export default ItemGroup;
