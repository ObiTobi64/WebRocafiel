// src/pages/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import logo from '../img/logo.png'; 
const Header: React.FC = () => {
    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', color: '#fff',backdropFilter: 'blur(24px)',flexShrink: 0}} // Color RGBA para mayor transparencia
            elevation={0}
        >
            <Toolbar>
                <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img 
                        src={logo} // Ruta a tu imagen
                        alt="Icono de ROCAFIEL"
                        style={{ width: '30px', height: '40px', marginRight: '8px' }} // Ajusta el tamaño según sea necesario
                    />
                    ROCAFIEL
                </Typography>
                <div style={{ display: 'flex', gap: '16px', marginLeft: '100%' }}>   
                    <Button color="inherit">Inicio</Button>
                    <Button color="inherit">Nosotros</Button>
                    <Button color="inherit">Carreras</Button>
                    <Button color="inherit">Eventos</Button>
                    <Button color="inherit">Contacto</Button>
                    <Button color="inherit">Alumnos</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
