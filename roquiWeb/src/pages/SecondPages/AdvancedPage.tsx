import React from 'react';
import { Box } from '@mui/material';
import PlaceholderAspectRatio from './PlaceholderAspectRatio';
import styled from '@emotion/styled';

import image1 from '../../img/ChuquiLogo.jpg';
import image2 from '../../img/ZonaELogo.jpg';
import image3 from '../../img/ElAltoLogo.jpg';
import image4 from '../../img/KramerLogo.jpg';
import image5 from '../../img/SantaLogo.jpg';
import image6 from '../../img/CochaLogo.png';

const cardData = [
    { id: 1, image: image1, title: 'Rocafiel Chuquiaguillo', description: 'Description for Card 1', 
        redirectUrl: 'https://www.facebook.com/rocafielcongregacioncristiana?locale=es_LA' },
    { id: 2, image: image2, title: 'Rocafiel Zona Este', description: 'Description for Card 2', 
        redirectUrl: 'https://www.facebook.com/RocafielZonaEste?locale=es_LA' },
    { id: 3, image: image3, title: 'Rocafiel El Alto', description: 'Description for Card 3', 
        redirectUrl: 'https://www.facebook.com/congregacioncristianarocafielelalto?locale=es_LA' },
    { id: 4, image: image4, title: 'Rocafiel Kramer', description: 'Description for Card 4', 
        redirectUrl: 'https://www.facebook.com/RocaFielKramer?locale=es_LA' },
    { id: 5, image: image5, title: 'Rocafiel Santa Cruz', description: 'Description for Card 5', 
        redirectUrl: 'https://www.facebook.com/ROCAFIELSCZ?locale=es_LA' },
    { id: 6, image: image6, title: 'Rocafiel Cochabamba', description: 'Description for Card 6', 
        redirectUrl: 'https://www.facebook.com/ccrocafielcbba?locale=es_LA' },
];

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    padding: '40px',
});

const AdvancedPage: React.FC = () => {
    return (
        <Container>
            {cardData.map((card) => (
                <PlaceholderAspectRatio
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    redirectUrl={card.redirectUrl}
                />
            ))}
        </Container>
    );
};

export default AdvancedPage;
