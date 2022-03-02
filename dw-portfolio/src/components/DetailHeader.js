import React from 'react';
import styled from "styled-components";
import { IoMdArrowBack } from 'react-icons/io';

const Header = styled.header`
  position: fixed;
  top: 0;
  height: 30px;
  width: 550px;
  background-color: black;
`;

const Btn = styled.div`
  border: none;
  color: white;
`;

const BackArrowBtn = styled(IoMdArrowBack)`
  size: 30px;
  
`;

const DetailHeader = () => {
    return (
        <>
            <Header>
                <Btn>
                    <BackArrowBtn />
                </Btn>
            </Header>
        </>
    );
};

export default DetailHeader;