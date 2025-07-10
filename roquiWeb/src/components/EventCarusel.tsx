// src/components/EventCarousel.tsx
import React from 'react';
import { Carousel } from 'antd';
import { useEventImages } from '../hooks/useEventImages';

const EventCarousel: React.FC = () => {
  const images = useEventImages();

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px 10px',
      }}
    >
      <Carousel autoplay>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60vh', // altura más grande
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                maxWidth: '1000px',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
