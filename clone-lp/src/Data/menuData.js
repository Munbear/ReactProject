import React from 'react';
import { BsBorderAll, BsBagFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

export const MenuData = [
  {
    id: 6,
    path: '/shopping/all',
    icon: <BsBorderAll size='40' />,
    cName: 'menu-box',
  },
  {
    id: 7,
    path: '/shopping/top',
    icon: <FaTshirt size='50' />,
    cName: 'menu-box',
  },
  {
    id: 8,
    path: '/shopping/outer',
    icon: <GiMonclerJacket size='50' />,
    cName: 'menu-box',
  },
  {
    id: 9,
    path: '/shopping/pants',
    icon: <GiArmoredPants size='50' />,
    cName: 'menu-box',
  },
  {
    id: 10,
    path: '/shopping/shoes',
    icon: <GiSonicShoes size='50' />,
    cName: 'menu-box',
  },
  {
    id: 11,
    path: '/shopping/bag',
    icon: <BsBagFill size='50' />,
    cName: 'menu-box',
  },
  {
    id: 12,
    path: '/shopping/jewellery',
    icon: <VscWatch size='50' />,
    cName: 'menu-box',
  },
  {
    id: 13,
    path: '/shopping/otherthing',
    icon: <RiWalletLine size='50' />,
    cName: 'menu-box',
  },
];
