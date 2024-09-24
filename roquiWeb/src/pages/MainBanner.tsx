import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import fondoVideo from '../video/fondoo.mp4'; // Ajusta la ruta según la ubicación de tu archivo


const MainBanner: React.FC = () => {
    return (
    <Box
        sx={{
        position: 'relative', // Permite posicionar el video detrás del contenido
        height: '100vh',
        width: '191%',
        overflowX: 'hidden', 
        overflow: 'hidden', // Oculta cualquier contenido que se salga del contenedor
        }}
    >
        <video
        src={fondoVideo} // Reemplaza esto con la URL de tu video
        autoPlay
        loop
        muted
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            zIndex: 1, // Asegúrate de que el video esté detrás
            transform: 'translate(-50%, -50%)', // Centra el video
        }}
        />
        <Box
            sx={{
                position: 'relative', 
                zIndex: 2, 
                color: '#fff',
                backgroundColor: 'rgba(51, 51, 51, 0.0)', 
                padding: '13%',
                borderRadius: '8px',
                textAlign: 'center',
        }}
        >
        <Typography variant="h3" gutterBottom>
            Entrenando hijos e hijas de Dios
        </Typography>
        <Typography variant="h6" gutterBottom>
            para manifestar el Reino eterno en las naciones
        </Typography>
        <Typography variant="body1" gutterBottom>
            ¿Estás listo para ser parte?
        </Typography>
        <Box sx={{ display: 'flex', gap: '30px', marginTop: '20px', justifyContent: 'center' }}>
            <Button variant="outlined" color="inherit" size="large" sx={{ borderRadius: '25px' }}>
            Nuestra Visión
            </Button>
            <Button variant="contained" size="large" sx={{ borderRadius: '25px' ,color:"#000" , backgroundColor: '#FFFFFF'}}>
            Carreras Ministeriales
            </Button>
        </Box>
        </Box>
    </Box>
    );
};

export default MainBanner;
