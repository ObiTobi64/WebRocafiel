import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import fondoVideo from '../video/mainBar.mp4'; 
import { useTheme, useMediaQuery } from '@mui/material';

const MainBanner: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                paddingTop: '-10%',
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
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Asegura que el video se ajuste sin recortarse
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
                    padding: isMobile ? '20%' : '5%',
                    textAlign: 'center',
                    borderRadius: '8px',
                }}
            >
                <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
                    Rocafiel
                </Typography>
                <Typography variant={isMobile ? 'body2' : 'h6'} gutterBottom>
                    Bienvenido a casa
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
