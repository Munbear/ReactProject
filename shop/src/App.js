/* eslint-disable */
import logo from './logo.svg';
import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';

export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Dowon shopping</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='./Detail'>
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
            <h1>Hello world</h1>
            <p>
              this is a simple hero unit, a simple jumbotron-style compoment for
              calling i dont know what is wrong with this god damm code why is
              it not working what i want to do i hope it will running that i
              expected!
            </p>
            <p>
              <Button>learn more</Button>
            </p>
          </div>

          <div className='container'>
            <재고context.Provider value={재고}>
              <div className='row'>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i} />;
                })}
              </div>
            </재고context.Provider>
            <button
              className='btn btn-primary'
              onClick={() => {
                axios
                  .get('https://codingapple1.github.io./shop/data2.json')
                  .then((result) => {
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
            <Detail shoes={shoes} 재고={재고} /> {/*  <<< 컴포넌트임 */}
          </재고context.Provider>
        </Route>

        <Route path='/:id'>
          <div>아무거나 적었을때 이거 보여주샘</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);
  return (
    <div className='col-m4'>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h4> {props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Test></Test>
    </div>
  );
}

function Test(props) {
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>;
}

export default App;

// https://codingapple1.github.io./shop/data2.json
