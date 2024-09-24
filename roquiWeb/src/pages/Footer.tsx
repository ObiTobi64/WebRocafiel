import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#222', padding: '10px', textAlign: 'center', color: 'white' }}>
      <Typography variant="body2">© 2024 Rocafiel. Todos los derechos reservados.</Typography>
    </footer>
  );
};

export default Footer;
