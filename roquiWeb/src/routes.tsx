// src/routes.tsx
import { Route, Routes } from 'react-router-dom';
import MainBanner from './pages/MainBanner';
import Layout from './layout/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout> <MainBanner /> </Layout>} />
      <Route path="/main-banner" element={<Layout><MainBanner /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;
