import React, { useState } from 'react';
import './App.css';
import reactRouterDom from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
// import { BsInboxes } from 'react-icons/bs';
import { AiFillPushpin } from 'react-icons/ai';

import product5 from './images/product5.jpg';
import item1 from './images/item1.jpg';
import item2 from './images/item2.jpg';
import item3 from './images/item3.jpg';
import item4 from './images/item4.jpg';
import item5 from './images/item5.jpg';

let Header = styled.header`
  position: fixed;
  top: 0;
  width: 550px;
  background-color: black;
`;

let Btn = styled.div`
  border none;
  color : white;
`;

let Paybtn = styled.button`
  width: 495px;
  color: white;
  background: black;
  font-size: 50px;
  border: none;
`;

let Footer = styled.footer`
  width: 550px;
  display: flex;
  position: fixed;
  bottom: 0;
`;

let Pin = styled.div`
  background-color: lightgray;
  width: 55px;
  height: 65px;
`;

let Price = styled.p`
  font-size: 50px;
  font-weight: bold;
`;

let Title = styled.p`
  font-size: 20px;
`;

let Foto = styled.img`
  width: 100%;
`;

let Card = styled.div`
  padding-bottom: 50px;
`;

let Review = styled.div`
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100px;

  background-color: #f9f9fa;
  color: #868e96;
`;

let Text = styled.input`
  width: 98.8%;
  height: 100px;
`;

function Iteminfo(props) {
  let [inputData, setInputData] = useState('');
  let [commentList, setCommentList] = useState([]);

  const onClickAddComment = () => {
    setCommentList([inputData, ...commentList]);
    setInputData('');
  };

  if (props.info === 0) {
    return (
      <div>
        <Card>
          <Foto src={item1} />
        </Card>
        <Card>
          <Foto src={item2} />
        </Card>
        <Card>
          <Foto src={item3} />
        </Card>
        <Card>
          <Foto src={item4} />
        </Card>
        <Card>
          <Foto src={item5} />
        </Card>
      </div>
    );
  } else if (props.info === 1) {
    return (
      <div>
        <Review>구매후기가 없습니다.</Review>
      </div>
    );
  } else if (props.info === 2) {
    return (
      <div>
        <Text
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          value={inputData}
        />
        <button onClick={onClickAddComment}>제출하기</button>

        <div>
          {commentList.map((value) => (
            <p>{value}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default Iteminfo;
