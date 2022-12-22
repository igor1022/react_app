import React, {Component} from "react";
import { Container, ListGroup, Card} from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';
import reportImg from '../assets/report.jpg';

export default class Blog extends Component {
    render () {
        return (
            <Container>
                <Row className="parent">
                    <Col md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src={reportImg}></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Звіт №1</h5>
                                <p>
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col  md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src={reportImg}></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Звіт №2</h5>
                                <p>
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col  md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src={reportImg}></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Звіт №3</h5>
                                <p>
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України.  
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Col  md='9'>
                        <div className="d-flex align-items-center m-5">
                            <div class="flex-shrink-0">
                                <img 
                                className="mr-3"
                                width={250}
                                height={150}
                                src={reportImg}></img>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <h5>Звіт №4</h5>
                                <p>
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України. 
                                    Зробили для України.
                                </p>    
                            </div>
                        </div>
                    </Col>
                    <Card className="mt-3" border="success" text='primary' bg='light'>
                        <Card.Body>
                            <Card.Title>Пожертвувати</Card.Title>
                            <Card.Text>
                               Реквізити для благодійності
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}