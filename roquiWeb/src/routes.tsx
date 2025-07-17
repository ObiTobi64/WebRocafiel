import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { lazy, Suspense} from "react";

const HomePage = lazy(()=> import ('./pages/HomePage/HomePage'));
const AdvancedPage = lazy(()=> import ('./pages/SecondPages/AdvancedPage'));
const Advances = lazy(()=> import ('./pages/SecondPages/Advances'));
const EventsPage = lazy(()=> import ('./pages/SecondPages/EventsPage'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/advanced"
        element={
          <Layout>
            <AdvancedPage />
          </Layout>
        }
      />
      <Route
        path="/advanced/:id"
        element={
          <Layout>
            <Advances />
          </Layout>
        }
      />
      <Route
        path="/events"
        element={
          <Layout>
            <EventsPage />
          </Layout>
        }
      />
    </Routes>
    </Suspense>
  );
};

export default AppRoutes;
