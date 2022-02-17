import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './MenuBox.css';
import styled from 'styled-components';

import { BsBorderAll, BsBagFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

import { TestData } from './Data/testData.js';

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
      {TestData.map((item, index) => {
        return (
          <ItemBox key={item} className={item.cName}>
            <Link to={item.path}>{item.icon}</Link>
          </ItemBox>
        );
      })}
      {/* <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      ></ItemBox>

      <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <FaTshirt size='40' />
      </ItemBox>

      <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <GiMonclerJacket size='40' />
      </ItemBox>
      <ItemBox
        id='pant'
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <GiArmoredPants size='40' />
      </ItemBox>

      <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <GiSonicShoes size='40' />
      </ItemBox>

      <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <BsBagFill size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <VscWatch size='40' />
      </ItemBox>
      <ItemBox
        onClick={() => {
          history.push('/shopping/' + props.test.path);
        }}
      >
        <RiWalletLine size='40' />
      </ItemBox> */}
    </ItemMenue>
  );
};

export default ItemGroup;
