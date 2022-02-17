import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBox.css';
import styled from 'styled-components';
import { MenuData } from './Data/menuData.js';

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
  return (
    <ItemMenue>
      {MenuData.map((item, index) => {
        return (
          <ItemBox key={item} className={item.cName}>
            <Link to={item.path}>{item.icon}</Link>
          </ItemBox>
        );
      })}
    </ItemMenue>
  );
};

export default ItemGroup;
