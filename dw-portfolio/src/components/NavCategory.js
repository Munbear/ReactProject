import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';

import Category from '../Data/categories'


const BackBtn = styled.button`
  background-color: white;
  border: none;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid darkgray;
  padding: 0px 0px 0px 13px;
`;

const NavBtn = styled.button`
  background-color: white;
  color: darkgray;
  border: none;
  cursor: pointer;
  padding: 15px;
  font-size: large;
  
  &:hover {
    color: black;
    border-bottom: 1px solid black;
    font-weight: 700;
  }
`;

const NavCategory = (props) => {
    let navigate = useNavigate();
    return(
        <>
            <BackBtn>
                <IoMdArrowBack onClick={ () => { navigate('/')}} size='20'/>
            </BackBtn>

            <NavWrap>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory('all')
                }}>전체</NavBtn>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory(Category.TOP)
                }}>상의</NavBtn>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory(Category.OUTER)
                }}>아우터</NavBtn>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory(Category.PANTS)
                }}>하의</NavBtn>
                <NavBtn onClick={ ()=> {
                    props.goToOtherCategory(Category.SHOES)
                }}>신발</NavBtn>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory(Category.BAG)
                }}>가방</NavBtn>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory(Category.JEWELLERY)
                }}>악세사리</NavBtn>
                <NavBtn onClick={ () => {
                    props.goToOtherCategory(Category.OTHER)
                }}>기타</NavBtn>
            </NavWrap>
        </>
    )
}

export default NavCategory;
