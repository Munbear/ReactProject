import React, { useEffect, memo } from 'react';
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  let state = useSelector((state) => state);
  console.log(state.reducer);
  let dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: '수량증가', 데이터: a.id });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: '수량감소',
                        데이터: a.id,
                      });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alert열렸니 === true ? (
        <div className='my-alert2'>
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: 'alert닫기' });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
      <Parent 이름='존박' 나이='23'></Parent>
    </div>
  );
}

function Parent(props) {
  return (
    <div>
      <Child1 이름={props.이름}></Child1>
      <Child2 나이={props.나이}></Child2>
    </div>
  );
}

function Child1(props) {
  useEffect(() => {
    console.log('랜더링1');
  });
  return <div>123</div>;
}

let Child2 = memo(function () {
  useEffect(() => {
    console.log('랜더링2');
  });
  return <div>2222</div>;
});

// function state를props화(state) {
//   return {
//     state: state.reducer,
//     alert열렷니: state.reducer2,
//   };
// }  /// 옛날 버전

// export default connect(state를props화)(Cart);

export default Cart;
