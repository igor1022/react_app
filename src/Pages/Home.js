import React, {Component} from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import CarouselBox from '../Components/CarouselBox';
import '../App.css';
export default class Home extends Component {
    render () {
        return (
            <>
                <CarouselBox></CarouselBox>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardGroup>
                        <Card className="m-3" border="success" text='primary'>
                            <Card.Img
                            variant="top"
                            src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600'>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        </Card>
                        <Card className="m-3">
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img
                            variant="bottom"
                            src='https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600'>
                            </Card.Img>
                        </Card>
                        <Card className="m-3">
                            <Card.Img
                            variant="top"
                            src='https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600'>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        </Card>
                    </CardGroup>    
                </Container>
            </>    
        )
    }
}