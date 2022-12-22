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
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

import logo from '../assets/logo.png';

export default class Header extends Component { 
    render () {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='primary' variant='dark'>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='75' 
                                width='150'
                                className='d-inline-block align-top'
                                alt='Logo'
                            />
                        </Navbar.Brand>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Container>
                                <Nav className='mr-auto'>
                                    <Nav.Link href='/'> Головна </Nav.Link>
                                    {/* <Nav.Link href='/about'> Про Фонд </Nav.Link>*/}
                                    <Nav.Link href='/contacts'> Контакти </Nav.Link>
                                    <Nav.Link href='/blog'> Звіти </Nav.Link>
                                </Nav>
                            </Container>
                            <Container>    
                                <Form>
                                    <Row>
                                        <Col>
                                            <Button variant='outline-info'>Пожертвувати</Button>
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