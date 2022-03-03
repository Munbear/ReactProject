import React from 'react';
import styled from "styled-components";

const TabWrap = styled.div`
  display: flex;
  flex: 1 1 40%;
  justify-content: center;
  ursor: pointer;
  border-bottom; solid 1px darkgray;
`;

const TabBtn = styled.button`
  background-color: white;
  color: gray;
  flex: 1 1 40%;
  width: 120px;
  height: 50px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  :hover {
    color: black;
    border-bottom: 1px solid black;
    font-weight: bold;
  }
`;

const DetailTab = () => {
    return(
        <>
            <TabWrap>
                <TabBtn>상품정보</TabBtn>
                <TabBtn>리뷰</TabBtn>
                <TabBtn>Q&A</TabBtn>
            </TabWrap>
        </>
    );
};

export default DetailTab;