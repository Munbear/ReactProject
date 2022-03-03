import React from 'react';
import styled from "styled-components";
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

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

const DetailHeader = () => {
    let navigate = useNavigate();
    return (
        <>
            <Header>
                <Btn>
                    < IoMdArrowBack size='30' onClick={() => {
                        navigate(-1);
                    }}/>
                </Btn>
            </Header>
        </>
    );
};

export default DetailHeader;