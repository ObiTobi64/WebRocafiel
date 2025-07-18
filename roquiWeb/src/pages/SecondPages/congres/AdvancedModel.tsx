import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

// --- Container general ---
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FF9B45;
  gap: 20px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1000px;
`;

const BannerContainer = styled.section`
  position: relative;
  height: 600px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.4);
  z-index: 2;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 2.5rem;
    text-align: center;
    padding: 0 16px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const VideoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: black;
`;

const InfoMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  margin: 3rem auto;
  max-width: 1000px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  padding: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid #ff894f;
    display: inline-block;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1rem;

    strong {
      color: #ff894f;
      font-weight: 600;
    }
  }
`;

const MapBox = styled.div`
  flex: 1;
  padding: 1rem;

  iframe {
    width: 100%;
    height: 100%;
    min-height: 300px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const IntroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: 600px;
    width:100%;
  }
`;

const LeftSide = styled.div`
  background-image: url(''); /* reemplaza por tu imagen */
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  img {
    width: 250px;
    margin: 1rem 0;
  }

  }
`;

const RightSide = styled.div`
  flex: 1;
  background-color: #111;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 700;
    margin-bottom: 2rem;
  }

  }
`;

const LocationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  background-color: #fff;

  @media (min-width: 1024px) {
    flex-direction: row;
    height: auto;
  }
`;

const LeftInfo = styled.div`
  flex: 1;
  background-color: #111;
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid #ff894f;
    display: inline-block;
    padding-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 2;
    margin-bottom: 1rem;

    strong {
      color: #ff894f;
    }
  }
`;

const RightMap = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

//Seccion texto 

const QuoteSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

const QuoteText = styled.blockquote`
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
  color: #1e1e1e;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  &::before,
  &::after {
    content: '"';
  }
`;

const QuoteAuthor = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
  font-family: 'Montserrat', sans-serif;
`;


// --- Componente principal ---
const AdvancedPage = ({ children }: { children: React.ReactNode }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

// --- Subcomponentes ---
AdvancedPage.Banner = ({
  title,
  backgroundVideo,
  backgroundImage,
}: {
  title?: string | React.ReactNode;
  backgroundVideo?: string;
  backgroundImage?: string;
}) => {
  return (
    <BannerContainer>
      {backgroundVideo && (
        <VideoBackground autoPlay muted loop playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </VideoBackground>
      )}

      {backgroundImage && (
        <ImageBackground style={{ backgroundImage: `url(${backgroundImage})` }} />
      )}

      <Overlay />
      <BannerContent>
        <h1 >{title}</h1>
      </BannerContent>
    </BannerContainer>
  );
};




AdvancedPage.Video = ({children}) => (
    
    <VideoSection>{children}</VideoSection>
);

AdvancedPage.Buttons = ({children}) => (
  <Section>
      <VideoSection>
      <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">  
        {children}
      </button>
      </VideoSection>
      
  </Section>
)

AdvancedPage.IntroSection = ({
  backgroundImage,
  backgroundPosition,
  logoSrc,
  leftTitle,
  leftButtonText,
  leftButtonHref,
  rightTitle,
  rightText,
  rightCallToAction,
  rightButtonText,
  rightButtonHref,
}: {
  backgroundImage: string;
  backgroundPosition?: string;
  logoSrc?: string;
  leftTitle?: string;
  leftButtonText?: string;
  leftButtonHref?: string;
  rightTitle: string;
  rightText: string;
  rightCallToAction: string;
  rightButtonText: string;
  rightButtonHref: string;
}) => (
  <IntroSectionContainer>
    <LeftSide style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: backgroundPosition}}>
      <h3>{leftTitle}</h3>
      <img src={logoSrc} alt="" />
      <a href={leftButtonHref}>
        <Button variant="contained" color="success" size="large" sx={{ borderRadius: '10px' }}>
        {leftButtonText} 
        </Button>
      </a>
    </LeftSide>
    <RightSide>
      <h2>{rightTitle}</h2>
      <p>{rightText}</p>
      <strong>{rightCallToAction}</strong>
      <a href={rightButtonHref}>
        <Button variant="contained" color="error" size="large" sx={{ borderRadius: '10px' }}> 
        {rightButtonText} <span>»</span>
        </Button>
      </a>
    </RightSide>
  </IntroSectionContainer>
);

AdvancedPage.Quote = () => (
  <QuoteSection>
    <div>
      <QuoteText>
        Preocupémonos los unos por los otros, a fin de estimularnos al amor y a las buenas obras. No dejemos de congregarnos, como acostumbran hacerlo algunos, sino animémonos unos a otros, y con mayor razón ahora que vemos que aquel día se acerca.
      </QuoteText>
      <QuoteAuthor>Hebreos 10:24-25.</QuoteAuthor>
    </div>
  </QuoteSection>
);

// AdvancedPage.Info = ({
//   address,
//   schedule,
// }: {
//   address: string;
//   schedule: string;
// }) => (
//   <Section>
//     <h2>Dirección y horarios</h2>
//     <p><strong>Dirección:</strong> {address}</p>
//     <p><strong>Horario:</strong> {schedule}</p>
//   </Section>
// );

// AdvancedPage.Map = ({children}) => (
//   <div>
//     {children}
//   </div>
// );

// AdvancedPage.InfoWithMap = ({
//   address,
//   schedule,
//   schedule2,
//   children,
// }: {
//   address: string;
//   schedule: string;
//   schedule2?: string;
//   children: React.ReactNode;
// }) => (
//   <InfoMapContainer>
//     <InfoBox>
//       <h2>Dirección y horarios</h2>
//       <p><strong>Dirección:</strong> {address}</p>
//       <p><strong>Primer Turno:</strong> {schedule}</p>
//       <p><strong>Segundo Turno:</strong> {schedule2}</p>
//     </InfoBox>
//     <MapBox>
//       {children}
//     </MapBox>
//   </InfoMapContainer>
// );

AdvancedPage.LocationSection = ({
  address,
  schedule,
  schedule2,
  horario,
  children,
}: {
  address: string;
  schedule?: string;
  schedule2?: string;
  horario?:string;
  children: React.ReactNode;
}) => (
  <LocationSectionContainer>
    <LeftInfo>
      <h2>Dirección y horarios</h2>
      <p><strong>Dirección:</strong> {address}</p>
      {horario && <p><strong>Horario: </strong> {horario}</p>}
      {schedule && <p><strong>Primer Turno:</strong> {schedule}</p>}
      {schedule2 && <p><strong>Segundo Turno:</strong> {schedule2}</p>}
    </LeftInfo>
    <RightMap>
      {children}
    </RightMap>
  </LocationSectionContainer>
);


AdvancedPage.Footer = ({ children }) => (
  <div className="w-full">
    {children}
  </div>
);


export default AdvancedPage;
