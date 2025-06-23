// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Drag from './components/Drag'; // Ajusta la ruta según tu estructura de carpetas

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
        <Drag />
      </div>
    </Router>
  );
};

export default App;