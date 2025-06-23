import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';


const Vision: React.FC = () => {
  
      const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  return (
    <Box
      sx={{
        position: 'relative',
        height: '500px',
        backgroundImage: `url('src/img/vision1.png')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '40px',
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
          VISIÓN
        </Typography>
        <Typography variant="h6">
            Ser una congregación SANTA, ENTENDIDA en los tiempos, referente en Bolivia por el AMOR, PASIÓN, ORDEN, Y CONSTANTE INNOVACIÓN EN LOS SERVICIOS. Con servidores motivados, capacitados en la palabra de Dios, en ciencias y diversas artes, con infraestructura propia y apta para el desarrollo de sus actividades
        </Typography>
      </Box>
    </Box>
  );
};

export default Vision;
