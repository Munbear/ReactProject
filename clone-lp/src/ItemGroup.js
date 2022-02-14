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

const ItemGroup = (props) => {
  let history = useHistory();

  return (
    <ItemMenue>
      <ItemBox
        pathName='all'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <BsBorderAll size='30' />
      </ItemBox>

      <ItemBox
        id='top'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <FaTshirt size='40' />
      </ItemBox>

      <ItemBox
        id='outer'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <GiMonclerJacket size='40' />
      </ItemBox>
      <ItemBox
        id='pant'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <GiArmoredPants size='40' />
      </ItemBox>
      <ItemBox
        id='shoes'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <GiSonicShoes size='40' />
      </ItemBox>
      <ItemBox
        id='bag'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <BsBagFill size='40' />
      </ItemBox>
      <ItemBox
        id='jewellery'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <VscWatch size='40' />
      </ItemBox>
      <ItemBox
        id='otherthing'
        onClick={() => {
          history.push('/shopping/' + props.allItem.path);
        }}
      >
        <RiWalletLine size='40' />
      </ItemBox>
    </ItemMenue>
  );
};

export default ItemGroup;
