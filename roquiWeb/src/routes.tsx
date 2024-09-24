// src/routes.tsx
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import MainBanner from './pages/MainBanner';
import Footer from './pages/Footer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/header" element={<Header />} />
      <Route path="/main-banner" element={<MainBanner />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/" element={<MainBanner />} />  {/* Ruta principal redirigida a MainBanner */}
    </Routes>
  );
};

export default AppRoutes;
