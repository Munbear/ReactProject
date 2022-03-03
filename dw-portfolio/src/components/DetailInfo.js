import React, {useState} from 'react';
import styled from "styled-components";

const ItemFoto = styled.div`
  padding-bottom: 50px;
  
  img {
    width: 100%;
  }
`;

const Review = styled.div`
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100px;

  background-color: #f9f9fa;
  color: #868e96;
`;

const InputWrapper = styled.div`
  display: flex;
  
  input {
    width: 98.8%;
    height: 100px;
  }
  
  button{
    cursor: pointer;
    font-size: 18px;
  }
`

const Comment = styled.p`
  height: 75px;
  border-bottom: solid 1px black;
`;

const DetailInfo = (props) => {
    let [inputData, setInputData] = useState('');
    let [commentList, setCommentList] = useState([]);

    const onClickAddComment = () => {
        setCommentList([inputData, ...commentList]);
        setInputData('');
    };

    const { productsId } = props;

    if ( props.infoTab === 0) {
        return (
            <>
                <ItemFoto>
                    <img src={productsId.thumnailImage}/>
                </ItemFoto>

            </>
        );
    } else if ( props.infoTab === 1) {
        return (
            <>
                <Review>구매 후기가 없습니다</Review>
            </>
        );
    } else if (props.infoTab === 2) {
        return (
            <>
                <InputWrapper>
                    <input onChange={ (e) => {
                        setInputData(e.target.value);
                    }}/>
                    <button onClick={onClickAddComment}>등록</button>
                </InputWrapper>
                <div>
                    {commentList.map( (value) => (<Comment>{value}</Comment>) )}
                </div>
            </>
        );
    };
};

export default DetailInfo;