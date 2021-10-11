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

  let [따봉, 따봉변경] = useState(0);
  let posts = '김포 고기 맛집';
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      {글제목.map(function (글, i) {
        return (
          <div className='list' key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}
            >
              {글}
              <span
                onClick={() => {
                  var arrayLike = 따봉;
                  arrayLike = 0;
                  따봉변경(arrayLike + 1);
                }}
              >
                ❤️
              </span>
              {따봉}
            </h3>
            <p>10월 3일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className='publish'>
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            var arrayCopy = [...글제목];
            arrayCopy.unshift(입력값); // unshift는 앞에 값에 추가 해주세요 라는 함수
            글제목변경(arrayCopy);
          }}
        >
          저장
        </button>
      </div>

      {/* <Profile /> */}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        열고닫기
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용 </p>
    </div>
  );
}

// class Profile extends React.Component {
//   //// 옛날 문법
//   constructor() {
//     super();
//     this.state = { name: 'Park', age: 30 };
//   }

//   changeName = () => {
//     this.setState({ name: 'MUN' });
//   };

//   render() {
//     return (
//       <div>
//         <h3>프로필입니다.</h3>
//         <p>저는 {this.state.name} 입니다.</p>
//         <button onClick={this.changeName}> 버튼 </button>
//       </div>
//     );
//   }
// }

export default App;
