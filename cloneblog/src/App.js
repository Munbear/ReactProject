import React, { useState } from 'react';
import logo from './logo.svg'; /* 이미지 가져오기 */
import './App.css';

function App() {
  //let posts = '강남 고기 맛집'; /*<< 데이터 바인딩 {변수명, 함수 등}*/
  // function nonename() {
  //   /* 이렇게도 사용할 수 있다. */
  //   return 100;
  // }

  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 라면 맛집',
    '강남 카페 추천',
  ]);

  function 제목바꾸기() {
    var newArray = [...글제목]; // 수정된[데이터]를 만들고 state를 deep copy해서 수정한다.
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  let [따봉, 따봉변경] = useState(0);
  let posts = '김포 고기 맛집';

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className='list'>
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>10월 4일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {글제목[1]} </h3>
        <p>10월 3일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3> {글제목[2]} </h3>
        <p>10월 2일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
