import React from 'react';
import { BsBorderAll, BsBagFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

export const MenuData = [
  {
    path: '/shopping/all',
    icon: <BsBorderAll size='40' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/top',
    icon: <FaTshirt size='50' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/outer',
    icon: <GiMonclerJacket size='50' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/pants',
    icon: <GiArmoredPants size='50' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/shoes',
    icon: <GiSonicShoes size='50' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/bag',
    icon: <BsBagFill size='50' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/jewellery',
    icon: <VscWatch size='50' />,
    cName: 'menu-box',
  },
  {
    path: '/shopping/otherthing',
    icon: <RiWalletLine size='50' />,
    cName: 'menu-box',
  },
];
