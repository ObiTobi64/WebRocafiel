import {Route, Routes } from 'react-router-dom'; 
import Layout from './layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AdvancedPage from './pages/SecondPages/AdvancedPage';
import AdvancesModel from './pages/SecondPages/congres/AdvancedModel';
import EventsPage from './pages/SecondPages/EventsPage';
import Advances from './pages/SecondPages/Advances';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/advanced" element={<Layout><AdvancedPage /></Layout>} />
        <Route path="/advanced/:id" element={<Layout><Advances /></Layout>} />
        <Route path="/events" element={<Layout><EventsPage /></Layout>} />
      </Routes>
  );
};

export default AppRoutes;
