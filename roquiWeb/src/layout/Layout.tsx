// src/layout/Layout.tsx
import React, { ReactNode } from 'react';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import Toolbar from '@mui/material/Toolbar/Toolbar';

// Añade el tipo de props con ReactNode para children
interface LayoutProps {
  children: ReactNode; // Esto permite pasar cualquier contenido React
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    <>
        <Header/>
        <Toolbar />
        {children}
        {/* <Footer /> */}
    </>
    );
};

export default Layout;
