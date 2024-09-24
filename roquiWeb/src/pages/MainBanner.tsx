import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const MainBanner: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '200%', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ color: '#fff', backgroundColor: '#333', padding: '40px', borderRadius: '8px' }}>
        <Typography variant="h3" gutterBottom>
          Entrenando hijos e hijas de Dios
        </Typography>
        <Typography variant="h6" gutterBottom>
          para manifestar el Reino eterno en las naciones
        </Typography>
        <Typography variant="body1" gutterBottom>
          ¿Estás listo para ser parte?
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
          <Button variant="outlined" color="inherit" size="large">
            Nuestra Visión
          </Button>
          <Button variant="contained" color="primary" size="large">
            Carreras Ministeriales
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainBanner;
