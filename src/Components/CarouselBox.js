import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import rodinaImg from '../assets/rodina.jpg';

export default class About extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ rodinaImg }
                        alt="Rodina"
                    />
                    <Carousel.Caption>
                        <h3>Бийся на світлій стороні</h3>
                        <p>Перший Український Міжнародний Фонд</p>
                    </Carousel.Caption>
                </Carousel.Item>   
            </Carousel>
            
        )
    }
}