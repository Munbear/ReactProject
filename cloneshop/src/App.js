/*eslint-disable*/

import React, { useContext, useState, lazy, Suspense } from 'react';
import axios from 'axios';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
// import Detail from './Detail.js';
let Detail = lazy(() => {
  return import('./Detail.js');
});
import { Link, Route, Switch } from 'react-router-dom';
import Cart from './cart';
import { useHistory } from 'react-router';

export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  /// 중요한 데이터는 메인 파일에 저장한다 데이터는 위에서 밑으로 흐리기때문
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg' className=''>
        <Container>
          <Navbar.Brand href='#home'>Easy Coding</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/detail'>
                Detail
              </Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <div className='background'>
            <h1 className='display-4'>Hello, world!</h1>
            <p className='lead'>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p className='lead'>
              <a className='btn btn-primary btn-lg' href='#' role='button'>
                Learn more
              </a>
            </p>
          </div>

          <div className='container'>
            <재고context.Provider value={재고}>
              <div className='row'>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} />;
                })}
              </div>
            </재고context.Provider>
            <button
              className='btn btn-primary'
              onClick={() => {
                axios.post('');
                ///로딩중이라는 UI띄움
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then((result) => {
                    /// 로디중 UI 삭제
                    console.log(result.data);
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => {
                    console.log('실패');
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <재고context.Provider value={재고}>
            <Suspense fallback={<div>로딩중이에요</div>}>
              <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
            </Suspense>
          </재고context.Provider>
        </Route>

        <Route path='/cart'>
          <Cart></Cart>
        </Route>

        <Route path='/:id'>
          <div>아무거나 적었을대 보여주셈 </div>
        </Route>
      </Switch>

      {/* <Route path='/어쩌구' component={Modal}></Route> */}
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();
  return (
    <div
      className='col-md-4'
      onClick={() => {
        history.push('/detail/' + props.shoes.id);
      }}
    >
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h3>{props.shoes.title}</h3>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      <Test></Test>
    </div>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>;
}

export default App;
