import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

// Imágenes
import image1 from '../../img/Chuqui.png';
import image2 from '../../img/ZonaEste.png';
import image3 from '../../img/elAlto.png';
import image4 from '../../img/Kramer.png';
import image5 from '../../img/SanCruz.png';
import image6 from '../../img/Cocha.png';

// URLs
const links = [
    'https://www.facebook.com/rocafielcongregacioncristiana?locale=es_LA',
    'https://www.facebook.com/RocafielZonaEste?locale=es_LA',
    'https://www.facebook.com/congregacioncristianarocafielelalto?locale=es_LA',
    'https://www.facebook.com/RocaFielKramer?locale=es_LA',
    'https://www.facebook.com/ROCAFIELSCZ?locale=es_LA',
    'https://www.facebook.com/ccrocafielcbba?locale=es_LA',
];

// Estilos
const CarouselContainer = styled.div`
    width: 400%;
    max-width: 1520px;
    margin: 0 auto;
    margin-top: 54px;
    position: relative;
    
`;

const CarouselItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 700px; // Ajusta la altura para que las imágenes no sean gigantes
    object-fit: cover;
`;

const Button = styled.a`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 10px;
    background-color: rgba(240, 225, 149, 0.86);
    color: black;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
        background-color: rgba(102, 221, 106, 0.9);
    }
`;

const CarouselComponent: React.FC = () => {
    return (
        <CarouselContainer>
            <Carousel autoplay arrows>
                <CarouselItem>
                    <StyledImage src={image1} alt="ChuquiLogo" />
                    <Button href={links[0]} target="_blank">Visitar Página</Button>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage src={image2} alt="ZonaELogo" />
                    <Button href={links[1]} target="_blank">Visitar Página</Button>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage src={image3} alt="ElAltoLogo" />
                    <Button href={links[2]} target="_blank">Visitar Página</Button>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage src={image4} alt="KramerLogo" />
                    <Button href={links[3]} target="_blank">Visitar Página</Button>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage src={image5} alt="SantaLogo" />
                    <Button href={links[4]} target="_blank">Visitar Página</Button>
                </CarouselItem>
                <CarouselItem>
                    <StyledImage src={image6} alt="CochaLogo" />
                    <Button href={links[5]} target="_blank">Visitar Página</Button>
                </CarouselItem>
            </Carousel>
        </CarouselContainer>
    );
};

export default CarouselComponent;

