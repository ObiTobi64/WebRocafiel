import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png'; 
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/'); 
    };
    const handleAdvancedClick = () =>{
        navigate('/advanced');
    };
    const handleEventsClick = () =>{
        navigate('/events');
    };
    return (
        <AppBar
            position="fixed"
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#fff', backdropFilter: 'blur(24px)', flexShrink: 0 }} 
            elevation={0}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleLogoClick} sx={{ padding: 0 }} disableRipple>
                        <img 
                        src={logo} 
                        alt="Icono de ROCAFIEL"
                        style={{ width: '30px', height: '50px', marginRight: '8px' }} 
                        />
                    </IconButton>
                    ROCAFIEL
                </Typography>

                {isMobile ? (
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Button color="inherit" onClick={handleAdvancedClick}>Avanzadas</Button>
                        <Button color="inherit">Nosotros</Button>
                        <Button color="inherit" onClick={handleEventsClick}>Eventos</Button>
                        <Button color="inherit">Contactos</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
