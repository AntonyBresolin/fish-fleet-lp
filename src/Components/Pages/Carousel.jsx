import React from 'react';
import Slider from 'react-slick';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

const Carousel = () => {
    const settings = {
        dots: true, // Mantém os pontos ativos
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots", // Usa a classe padrão para pontos
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
                <SecondPage />
                <ThirdPage />
            </Slider>
        </div>
    );
};

export default Carousel;
