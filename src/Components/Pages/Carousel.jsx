import React from 'react';
import Slider from 'react-slick';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import NextArrow from '../carousel/NextArrow';
import PrevArrow from '../carousel/PrevArrow';

const Carousel = () => {



    const settings = {
        dots: true, // Mantém os pontos ativos
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots", // Usa a classe padrão para pontos
        autoplay: true,
        autoplaySpeed: 3000,
        swapeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: dots => (
            <div>
                <ul style={{ marginBottom: "40px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <div>
            <Slider {...settings}>
                <FirstPage />
                <ThirdPage />
                <SecondPage />
            </Slider>
        </div>
    );
};

export default Carousel;
