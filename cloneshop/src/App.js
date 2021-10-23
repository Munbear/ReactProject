/*eslint-disable*/

import React, { useState } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg' className=''>
        <Container>
          <Navbar.Brand href='#home'>Easy Coding</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
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
            <div className='row'>
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} />;
              })}
            </div>
          </div>
        </Route>

        <Route path='/detail/:id'>
          <Detail shoes={shoes} />
        </Route>
        {/* 
        <Route path='/:id'>
          <div>alksdjflkajsdfl;akjsd</div>
        </Route> */}
      </Switch>

      {/* <Route path='/어쩌구' component={Modal}></Route> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        width='100%'
      />
      <h3>{props.shoes.title}</h3>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
