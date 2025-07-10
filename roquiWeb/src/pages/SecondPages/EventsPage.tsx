// src/pages/EventsPage.tsx
import React from 'react';
import EventCarusel from '../../components/EventCarusel';
import fondo from '../../img/fondoE.png';
import portada from '../../img/mainEvent1.jpg';

const EventsPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '0px',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${portada})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '80px 20px',
          margin: '0 -20px 20px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '0.5rem',
          }}
        >
          EVENTOS
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
          }}
        >
          Congresos y Conferencias
        </p>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 10px',
        }}
      >
        <EventCarusel />
      </div>
    </div>
  );
};

export default EventsPage;
