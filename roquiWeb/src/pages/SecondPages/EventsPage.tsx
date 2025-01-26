import React from 'react';
import { Carousel } from 'antd';

// Importa las imágenes
import imagen1 from '../../img/cam1.jpg';
import imagen2 from '../../img/cam2.jpg';
import imagen3 from '../../img/conVaro.jpg';
import imagen4 from '../../img/canVaro1.jpg';
import imagen5 from '../../img/mainEvent1.jpg';
import imagen6 from '../../img/fondoE.png';


// Estilo para el contenedor de la página
const pageStyle: React.CSSProperties = {
    backgroundImage: `url(${imagen6})`, // Color de fondo de la página
    minHeight: '40vh',         // Asegura que el fondo cubra toda la altura de la página
    padding: '20px',            // Espaciado opcional para que el contenido no esté pegado a los bordes
};

const coverStyle: React.CSSProperties = {
    backgroundImage: `url(${imagen5})`, // Imagen de fondo
    backgroundSize: 'cover',               // Ajusta la imagen al tamaño del contenedor
    backgroundPosition: 'center',          // Centra la imagen
    color: '#fff',                         // Color del texto
    textAlign: 'center',                   // Centra el texto
    padding: '80px 20px',                 // Espaciado interno
    marginBottom: '10px', 
    marginRight:'-20px',
    marginLeft:'-20px',                 // Espacio entre la portada y el carrusel
};

const carouselStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
    height: '52px',           // Altura del carrusel
    width: '100%',            // Ancho del carrusel
};

const imageStyle: React.CSSProperties = {
    marginTop: '3%',
    maxWidth: '43%',          // Asegura que la imagen no exceda el ancho del contenedor
    maxHeight: '50%',         // Asegura que la imagen no exceda la altura del contenedor
    display: 'block',         // Elimina espacios adicionales debajo de la imagen
    margin: '0 auto',         // Centra la imagen horizontalmente
};

const App: React.FC = () => (
    <div style={pageStyle}>
        {/* Portada con texto */}
        <div style={coverStyle}>
            <h1>EVENTOS</h1>
            <p>Congresos y Conferencias</p>
        </div>

        {/* Carrusel */}
        <Carousel autoplay>
            <div style={carouselStyle}>
                <img 
                    src={imagen1} 
                    alt="Imagen 1" 
                    style={imageStyle} 
                />
            </div>
            <div style={carouselStyle}>
                <img 
                    src={imagen2} 
                    alt="Imagen 2" 
                    style={imageStyle} 
                />
            </div>
            <div style={carouselStyle}>
                <img 
                    src={imagen3} 
                    alt="Imagen 3" 
                    style={imageStyle} 
                />
            </div>
            <div style={carouselStyle}>
                <img 
                    src={imagen4} 
                    alt="Imagen 4" 
                    style={imageStyle} 
                />
            </div>
        </Carousel>
    </div>
);

export default App;