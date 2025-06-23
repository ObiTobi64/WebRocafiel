import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, useMediaQuery,Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png'; 
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        handleMenuClose(); // Cierra el menú al navegar
    };

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
                    <>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>

                        <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                backgroundColor: 'rgba(255, 252, 252, 0.9)',
                                color: '#000000'
                            }
                        }}

                        MenuListProps={{
                            sx: {
                                minWidth: 100
                            }
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}

                        sx={{
                            '& .MuiPaper-root': {
                                transition: 'all 0.3s ease-in-out'
                            }
                        }}
                        >

                        <MenuItem onClick={() => handleNavigation('/advanced')}>Avanzadas</MenuItem>
                            <MenuItem onClick={() => handleNavigation('/')}>Nosotros</MenuItem>
                            <MenuItem onClick={() => handleNavigation('/events')}>Eventos</MenuItem>
                            <MenuItem onClick={() => handleNavigation('/')}>Contactos</MenuItem>
                        </Menu>

                    </>
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
