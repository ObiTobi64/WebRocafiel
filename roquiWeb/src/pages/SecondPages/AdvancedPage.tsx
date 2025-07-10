import React from "react";
import { Carousel as AntdCarousel } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCarouselItems } from "../../hooks/useCarouselItems";

// --- Styled Components ---
const CarouselContainer = styled.div`...`; // igual que antes
const CarouselItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // 🔥 Importante
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 80vh;

  @media (max-width: 768px) {
    max-height: 50vh;
  }

  @media (max-width: 480px) {
    max-height: 40vh;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #F9F3EF;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(138, 199, 109, 0.9);
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

const Carousel = ({ children }: { children: React.ReactNode }) => (
  <CarouselContainer>
    <AntdCarousel autoplay arrows>{children}</AntdCarousel>
  </CarouselContainer>
);

const CarouselSlide = ({
  image,
  alt,
  congreId,
}: {
  image: string;
  alt: string;
  congreId: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/advanced/${congreId}`);
  };

  return (
    <CarouselItem>
      <StyledImage src={image} alt={alt} />
      <Button onClick={handleClick}>Conocer avanzada</Button>
    </CarouselItem>
  );
};

// --- Main Component ---
const CarouselComponent: React.FC = () => {
  const carouselItems = useCarouselItems();

  return (
    <>
      <Carousel>
        {carouselItems.map((item, index) => (
          <CarouselSlide
            key={index}
            image={item.image}
            alt={item.alt}
            congreId={item.congreId}
          />
        ))}
      </Carousel>
      
    </>
  );
};

export default CarouselComponent;
