// src/pages/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ROCAFIEL
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Nosotros</Button>
        <Button color="inherit">Carreras</Button>
        <Button color="inherit">Eventos</Button>
        <Button color="inherit">Contacto</Button>
        <Button color="inherit">Alumnos</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
