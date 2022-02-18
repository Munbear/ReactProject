import React from 'react';
import { BsBorderAll, BsBagFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

export const MenuData = [
  {
    itemN: 0,
    title: 'asdlfkjalsdf',
    path: '/all',
    icon: <BsBorderAll size='40' />,
    cName: 'menu-box',
  },
  {
    itemN: 1,
    title: 'askdfjlasd',
    path: '/top',
    icon: <FaTshirt size='50' />,
    cName: 'menu-box',
  },
  {
    itemN: 2,
    title: 'sdkfjals',
    path: '/outer',
    icon: <GiMonclerJacket size='50' />,
    cName: 'menu-box',
  },
  {
    itemN: 3,
    title: 'Pant',
    path: '/pants',
    icon: <GiArmoredPants size='50' />,
    cName: 'menu-box',
  },
  {
    itemN: 4,
    title: 'Shoes',
    path: '/shoes',
    icon: <GiSonicShoes size='50' />,
    cName: 'menu-box',
  },
  {
    itemN: 5,
    title: 'Bag',
    path: '/bag',
    icon: <BsBagFill size='50' />,
    cName: 'menu-box',
  },
  {
    itemN: 6,
    title: 'Jewellery',
    path: '/jewellery',
    icon: <VscWatch size='50' />,
    cName: 'menu-box',
  },
  {
    itemN: 7,
    title: 'Otherthing',
    path: '/Otherthing',
    icon: <RiWalletLine size='50' />,
    cName: 'menu-box',
  },
];
