import React from 'react';
import { BsBorderAll, BsBagFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

export const MenuData = [
  {
    title: 'All',
    path: '/all',
    icon: <BsBorderAll size='30' />,
    cName: 'menu-box',
  },
  {
    title: 'Tkop',
    path: '/top',
    icon: <FaTshirt size='40' />,
    cName: 'menu-box',
  },
  {
    title: 'Outer',
    path: '/outer',
    icon: <GiMonclerJacket size='40' />,
    cName: 'menu-box',
  },
  {
    title: 'Pant',
    path: '/pants',
    icon: <GiArmoredPants size='40' />,
    cName: 'menu-box',
  },
  {
    title: 'Shoes',
    path: '/shoes',
    icon: <GiSonicShoes size='40' />,
    cName: 'menu-box',
  },
  {
    title: 'Bag',
    path: '/bag',
    icon: <BsBagFill size='40' />,
    cName: 'menu-box',
  },
  {
    title: 'Jewellery',
    path: '/jewellery',
    icon: <VscWatch size='40' />,
    cName: 'menu-box',
  },
  {
    title: 'Otherthing',
    path: '/Otherthing',
    icon: <RiWalletLine size='40' />,
    cName: 'menu-box',
  },
];
