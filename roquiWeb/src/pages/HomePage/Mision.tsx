import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Mission: React.FC = () => {
    const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  return (
    <Box
      sx={{
        position: 'relative',
        height: '500px',
        backgroundImage: `url('src/img/mision.jpg')`, // Cambia esta ruta a tu imagen de misión
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          sx={{
            letterSpacing: '1px',
            marginBottom: '16px',
            border: '2px solid white',
            padding: '5px 20px',
            display: 'inline-block',
            borderRadius: '25px',
          }}
        >
          MISIÓN
        </Typography>
        <Typography variant="h6">
         Amar a Dios 
        </Typography>
        <Typography variant="h6">
         Reflejar su Amor 
        </Typography>
        <Typography variant="h6">
         Servir con Calidad e Innovación 
        </Typography>
        <Typography variant="h6">
        Enfocados en la RESTURACIÓN DE PERSONAS, FAMILIAS Y MINISTERIOS a fin de cumplir la gran comisión
        </Typography>
      </Box>
    </Box>
  );
};

export default Mission;
