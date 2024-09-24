// src/App.tsx
import React from 'react';
import Header from './pages/Header';
import MainBanner from './pages/MainBanner';
import Footer from './pages/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <Footer />
    </>
  );
};

export default App;
