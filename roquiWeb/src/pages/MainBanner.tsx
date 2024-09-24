import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import fondoVideo from '../video/fondoo.mp4'; 
import { useTheme, useMediaQuery } from '@mui/material';

const MainBanner: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas móviles

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <video
                src={fondoVideo}
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
                    zIndex: 1,
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    color: '#fff',
                    backgroundColor: 'rgba(51, 51, 51, 0.0)',
                    padding: isMobile ? '20%' : '13%',
                    textAlign: 'center',
                    borderRadius: '8px',
                }}
            >
                <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
                    Entrenando hijos e hijas de Dios
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'h6'} gutterBottom>
                    para manifestar el Reino eterno en las naciones
                </Typography>
                <Typography variant={isMobile ? 'caption' : 'body1'} gutterBottom>
                    ¿Estás listo para ser parte?
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        marginTop: '20px',
                        justifyContent: 'center',
                        flexDirection: isMobile ? 'column' : 'row',
                    }}
                >
                    <Button variant="outlined" color="inherit" size="large" sx={{ borderRadius: '25px' }}>
                        Nuestra Visión
                    </Button>
                    <Button variant="contained" size="large" sx={{ borderRadius: '25px', color: "#000", backgroundColor: '#FFFFFF' }}>
                        Carreras Ministeriales
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default MainBanner;
