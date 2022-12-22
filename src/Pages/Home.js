import React, {Component} from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import CarouselBox from '../Components/CarouselBox';
import '../App.css';
import botsImg from '../assets/bots.jfif';
import boxImg from '../assets/box.jfif';
import carsImg from '../assets/cars.jpg';


export default class Home extends Component {
    render () {
        return (
            <>
                <CarouselBox></CarouselBox>
                <Container>
                    <h2 className="text-center m-4">Що ми робимо</h2>
                    <CardGroup>
                        <Card className="m-3">
                            <Card.Img
                            variant="top"
                            src={botsImg}>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title>Гуманітарний вантаж</Card.Title>
                            <Card.Text>
                            Тисячі українців залишилися без даху над головою, без роботи та найнеобхідніших для життя речей. Сім'ї були розділені, рідні загублені. Щодня кількість вбитих та поранених серед мирного населення зростає. Наша задача - забезпечити базові потреби людей, що постраждали під час війни.
                             Ми потребуємо вашої допомоги у цей непростий для кожного українця час.
                            </Card.Text>
                            <Button variant="primary">Пожертвувати</Button>
                        </Card.Body>
                        </Card>
                        <Card className="m-3">
                        <Card.Body>
                            <Card.Title>Вантажі ДЛЯ ЗСУ</Card.Title>
                            <Card.Text>
                            Ми маємо змогу працювати та допомагати Україні й українцям лише за вашої участі.
                             Кожна гривня, долар, євро - це підтримка для тих, хто боронить нашу землю, нашу свободу на передовій та в тилу. Саме ви, патріоти України та просто небайдужі з усіх куточків світу, допомагаєте нам здобути перемогу у цій несправедливій війні російського агресора проти українців. За нами правда, з нами сила, з нами Бог! Все буде Україна!
                            </Card.Text>
                            <Button variant="primary">Пожертвувати</Button>
                        </Card.Body>
                        <Card.Img
                            variant="bottom"
                            src={boxImg}>
                            </Card.Img>
                        </Card>
                        <Card className="m-3">
                            <Card.Img
                            variant="top"
                            src={carsImg}>
                            </Card.Img>
                        <Card.Body>
                            <Card.Title>Авто для ЗСУ</Card.Title>
                            <Card.Text>
                            Наш фонд продовжує збір коштів на потреби ЗСУ та на формування продуктових наборів
                            </Card.Text>
                            <Button variant="primary">Пожертвувати</Button>
                        </Card.Body>
                        </Card>
                    </CardGroup>
                    <Card className="mt-3" border="success" text='primary' bg='light'>
                        <Card.Body>
                            <Card.Title>Пожертвувати</Card.Title>
                            <Card.Text>
                               Реквізити для благодійності
                            </Card.Text>
                        </Card.Body>
                    </Card>    
                </Container>
            </>    
        )
    }
}