import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface PlaceholderAspectRatioProps {
    image: string;
    title: string;
    description: string;
    redirectUrl: string;
}

const PlaceholderAspectRatio: React.FC<PlaceholderAspectRatioProps> = ({
    image,
    title,
    description,
    redirectUrl,
}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={1}>
            <img src={image} alt={title} style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.open(redirectUrl, '_blank', 'noopener,noreferrer')}
            >
                Ver más
            </Button>
        </Box>
    );
};

export default PlaceholderAspectRatio;
