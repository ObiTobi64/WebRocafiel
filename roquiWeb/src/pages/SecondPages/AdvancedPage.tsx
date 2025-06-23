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
import nacionalImage from '../../img/nacional.png'; // Importa la imagen adicional

// Datos del carrusel
const carouselItems = [
    { image: image1, alt: "ChuquiLogo", link: 'https://www.facebook.com/rocafielcongregacioncristiana?locale=es_LA' },
    { image: image2, alt: "ZonaELogo", link: 'https://www.facebook.com/RocafielZonaEste?locale=es_LA' },
    { image: image3, alt: "ElAltoLogo", link: 'https://www.facebook.com/congregacioncristianarocafielelalto?locale=es_LA' },
    { image: image4, alt: "KramerLogo", link: 'https://www.facebook.com/RocaFielKramer?locale=es_LA' },
    { image: image5, alt: "SantaLogo", link: 'https://www.facebook.com/ROCAFIELSCZ?locale=es_LA' },
    { image: image6, alt: "CochaLogo", link: 'https://www.facebook.com/ccrocafielcbba?locale=es_LA' },
];

// Estilos
const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    margin-top: 100px;

    @media (max-width: 768px) {
        margin-top: 50px;
    }

    @media (max-width: 480px) {
        margin-top: 30px;
    }
`;

const CarouselItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    max-height: 700px;
    object-fit: cover;

    @media (max-width: 768px) {
        max-height: 400px;
    }

    @media (max-width: 480px) {
        max-height: 300px;
    }
`;

const Button = styled.a`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: rgba(240, 225, 149, 0.86);
    color: black;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
        background-color: rgba(102, 221, 106, 0.9);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
        bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 6px 12px;
        bottom: 10px;
    }
`;

const AdditionalImageContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 40px auto;
    text-align: center;

    @media (max-width: 768px) {
        margin: 20px auto;
    }

    @media (max-width: 480px) {
        margin: 10px auto;
    }
`;

const AdditionalImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const CarouselComponent: React.FC = () => {
    return (
        <>
            <CarouselContainer>
                <Carousel autoplay arrows>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <StyledImage src={item.image} alt={item.alt} />
                            <Button href={item.link} target="_blank">Visitar Página</Button>
                        </CarouselItem>
                    ))}
                </Carousel>
            </CarouselContainer>
            <AdditionalImageContainer>
                <AdditionalImage src={nacionalImage} alt="Imagen Nacional" />
            </AdditionalImageContainer>
        </>
    );
};

export default CarouselComponent;