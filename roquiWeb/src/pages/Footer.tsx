import React from 'react';
import { Typography, Box, IconButton, Link } from '@mui/material';
import { Facebook, Instagram, YouTube, WhatsApp } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center', color: 'white' }}>
      <Typography variant="body2">© 2024 Rocafiel. Todos los derechos reservados.</Typography>
      
      <Box marginTop={2}>
        <Typography variant="body1" gutterBottom>Contáctanos: +123 456 7890</Typography>
        
        <Box display="flex" justifyContent="center" gap={2} marginTop={1}>
          <IconButton aria-label="Facebook" component={Link} href="https://www.facebook.com/rocafielcongregacioncristiana" target="_blank" color="inherit">
            <Facebook />
          </IconButton>

          <IconButton aria-label="Instagram" component={Link} href="https://www.instagram.com/rocafielcc/" target="_blank" color="inherit">
            <Instagram />
          </IconButton>

          <IconButton aria-label="YouTube" component={Link} href="https://www.youtube.com/@rocafielcc" target="_blank" color="inherit">
            <YouTube />
          </IconButton>

          <IconButton aria-label="WhatsApp" component={Link} href="https://wa.me/1234567890" target="_blank" color="inherit">
            <WhatsApp />
          </IconButton>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
