import {Route, Routes } from 'react-router-dom'; 
import Layout from './layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AdvancedPage from './pages/SecondPages/AdvancedPage';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/advanced" element={<Layout><AdvancedPage /></Layout>} />
        <Route path="/eventos" element={<Layout><AdvancedPage /></Layout>} />

      </Routes>
  );
};

export default AppRoutes;
