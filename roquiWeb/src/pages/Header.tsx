import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png'; 
import { useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas móviles

    return (
        <AppBar
            position="fixed"
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#fff', backdropFilter: 'blur(24px)', flexShrink: 0 }} 
            elevation={0}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={logo} 
                        alt="Icono de ROCAFIEL"
                        style={{ width: '30px', height: '50px', marginRight: '8px' }} 
                    />
                    ROCAFIEL
                </Typography>

                {isMobile ? (
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Button color="inherit">Avanzadas</Button>
                        <Button color="inherit">Nosotros</Button>
                        <Button color="inherit">Eventos</Button>
                        <Button color="inherit">Contactos</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
