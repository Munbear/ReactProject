import React from 'react';
import { BsBorderAll, BsBagFill } from 'react-icons/bs';
import { FaTshirt } from 'react-icons/fa';
import { GiMonclerJacket, GiArmoredPants, GiSonicShoes } from 'react-icons/gi';
import { VscWatch } from 'react-icons/vsc';
import { RiWalletLine } from 'react-icons/ri';

export const MenuData = [
  {
    id: 6,
    title: 'asdlfkjalsdf',
    price: '123123',
    path: '/shopping/all',
    icon: <BsBorderAll size='40' />,
    cName: 'menu-box',
  },
  {
    id: 7,
    title: 'askdfjlasd',
    price: '123123',
    path: '/shopping/top',
    icon: <FaTshirt size='50' />,
    cName: 'menu-box',
  },
  {
    id: 8,
    title: 'sdkfjals',
    price: '123123',
    path: '/shopping/outer',
    icon: <GiMonclerJacket size='50' />,
    cName: 'menu-box',
  },
  {
    id: 9,
    title: 'Pant',
    path: '/shopping/pants',
    icon: <GiArmoredPants size='50' />,
    cName: 'menu-box',
  },
  {
    id: 10,
    title: 'Shoes',
    path: '/shopping/shoes',
    icon: <GiSonicShoes size='50' />,
    cName: 'menu-box',
  },
  {
    id: 11,
    title: 'Bag',
    path: '/shopping/bag',
    icon: <BsBagFill size='50' />,
    cName: 'menu-box',
  },
  {
    id: 12,
    title: 'Jewellery',
    path: '/shopping/jewellery',
    icon: <VscWatch size='50' />,
    cName: 'menu-box',
  },
  {
    id: 13,
    title: 'Otherthing',
    path: '/shopping/otherthing',
    icon: <RiWalletLine size='50' />,
    cName: 'menu-box',
  },
];
