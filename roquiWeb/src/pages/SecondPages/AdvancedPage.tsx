import React from 'react';
import PlaceholderAspectRatio from './PlaceholderAspectRatio';
import { Box } from '@mui/material';

const AdvancedPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {Array.from({ length: 6 }).map((_, index) => (
        <PlaceholderAspectRatio key={index} />
      ))}
    </Box>
  );
};

export default AdvancedPage;
