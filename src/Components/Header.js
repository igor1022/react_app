import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button 
} from 'react-bootstrap'; 

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router,  Switch, Route, Link} from 'react-router-dom';

import Home from '../Pages/Home';
console.log(Home);
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

import logo from './logo192.png';

export default class Header extends Component { 
    render () {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='30' 
                                width='30'
                                className='d-inline-block align-top'
                                alt='Logo'
                            /> React site
                        </Navbar.Brand>
                    </Container>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Container>
                                <Nav className='mr-auto'>
                                    <Nav.Link href='/'> Home </Nav.Link>
                                    <Nav.Link href='/about'> About us </Nav.Link>
                                    <Nav.Link href='/contacts'> Contacts </Nav.Link>
                                    <Nav.Link href='/blog'> Blog </Nav.Link>
                                </Nav>
                            </Container>
                            <Container>    
                                <Form>
                                    <Row>
                                        <Col>
                                        <FormControl
                                            type='text'
                                            placeholder='Search'
                                            className='mr-sm-2'
                                        />
                                        </Col>
                                        <Col>
                                            <Button variant='outline-info'>Search</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Container>    
                        </Navbar.Collapse>    
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/contacts' component={Contacts}></Route>    
                        <Route exact path='/blog' component={Blog}></Route>
                    </Switch>
                </Router>
            </>
        );
    }
}    