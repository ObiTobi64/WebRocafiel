import AdvancedModel from "./AdvancedModel";
import styled from "styled-components";
import logo from "../../../img/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FadeContent from "../../../components/effects/FadeContent";
import BlurText from "../../../components/effects/BlurText";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const MainTitle = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 4rem;
  color: #ff3b30;
  margin: 0;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #1e1e1e;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  margin-top: 0.5rem;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  width: w-full;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 90%;
    height: auto;

    @media (max-width: 868px) {
      max-width: 80%;
    }
  }
`;

const BottomShape = styled.div`
  position: relative;
  bottom: 31px;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 2;

  svg {
    position: relative;
    display: block;
    width: calc(170%);
    height: 101px;

    path {
      fill: #000000;
    }
  }
`;

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const ZonaEsteCongre = () => {
  return (
    <AdvancedModel>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.Banner
          title={
            <TitleWrapper>
              <BannerContent>
                <img
                  src="https://avanzadacatolica.com/wp-content/webp-express/webp-images/uploads/2022/06/logoJMac.png.webp"
                  alt="Jóvenes de Avanzada"
                  width={300}
                />
              </BannerContent>
            </TitleWrapper>
          }
          backgroundImage="/zn1.png"
        />
      </FadeContent>
      <BottomShape>
        <svg viewBox="10 -3 900 67 " preserveAspectRatio="none">
          <path d="M1200 0L0 0 -892.25 80 1000 0z" />
        </svg>
      </BottomShape>

      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.Video>
          <video
            src="/pre1.mp4"
            width="50%"
            loop
            playsInline
            controls
            style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
          >
            Tu navegador no soporta el video.
          </video>
      
      <div className="flex flex-col justify-center">
      <BlurText 
        text="Rocafiel Zona Este"
        className="text-4xl mb-8 ml-5 "
      />
      <BlurText
        text="Bienvenido a Rocafiel Zona Este, donde nos encontramos con los jóvenes de la zona este de la ciudad de Monterrey, México. Estamos aquí para brindarte una experiencia única y agradable, con una atención especial a la salud y bienestar de nuestros miembros. Nos esforzamos por ser una comunidad acogedora y respetuosa, y nos esforzamos por ayudar a cada uno de nosotros a alcanzar nuestros objetivos y lograr nuestras metas. Juntos, somos más fuertes y más unidos que nunca. ¡Que disfrutes de esta experiencia única y agradable!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8 ml-5"
      />
      </div>
        </AdvancedModel.Video>
      </FadeContent>

      {/* <AdvancedModel.Buttons>
        <div className="flex flex-center justify-center" role="group">
          <button className="btn btn-primary">Jovenes</button>
          <button className="btn btn-secondary">Matrimonios</button>
          <button className="btn btn-tertiary">Jovenes Plus</button>
        </div>
      </AdvancedModel.Buttons>     */}

      <BottomShape>
        <svg viewBox="90 90 200 -10" preserveAspectRatio="none">
          <path d="M1200 0L0 66 1922  2100 0z" />
        </svg>
      </BottomShape>
      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.IntroSection
          backgroundImage="https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/514419823_1166806308823234_782774815816271291_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-cVqnCyw_9AQ7kNvwGS-UIk&_nc_oc=AdkNzg4OGDTTTXYUm4oQyq_PtL2l3u7ASaJYoS_EGnxFg9YRSPbs-nPRnHlM-PGOydA&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=srcsDE_OEcyvI_GDfbkWkg&oh=00_AfQTU11vYt-Vqe9mJmK2O-uCIGTRUkq-cgkAbKCOqnsvgA&oe=687CD6D3"
          logoSrc="https://avanzadacatolica.com/wp-content/webp-express/webp-images/uploads/2022/06/logoJMac.png.webp"
          leftTitle="Conoce"
          leftButtonText="Ver más"
          leftButtonHref="#ver-mas"
          rightTitle="Esto Somos"
          rightText="Nos flechó el dardo de la Santidad y, como el fuego encendería el leño, nos prendimos de felicidad."
          rightCallToAction="¿Quieres saber más?"
          rightButtonText="Ir a Jóvenes"
          rightButtonHref="jovenes"
        />
      </FadeContent>

      <BottomShape
        style={{
          height: "-20vh",
          width: "w-full",
        }}
      >
        <svg viewBox="90 90 200 -60" preserveAspectRatio="none">
          <path d="M1200 0L0 36 1922  -2300 0z" />
        </svg>
      </BottomShape>
      <AdvancedModel.InfoWithMap
        address="Av. Carlos Loayza Beltran, La Paz"
        schedule="8:30 AM - 10:00 AM"
        schedule2="10:30 AM - 12:30 PM"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.441034829883!2d-68.10695319999999!3d-16.5038175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21c99c709177%3A0x2b6a9aeada63abec!2sROCAFIEL%20ZONA%20ESTE%20-%20Congregaci%C3%B3n%20Cristiana!5e0!3m2!1ses-419!2sbo!4v1751904892497!5m2!1ses-419!2sbo"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </AdvancedModel.InfoWithMap>

      <AdvancedModel.Footer>
        <footer className="w-full bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-700 py-4 px-0">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Imagen a la izquierda */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-22 w-auto" />
              <p className="font-bold">Rocafiel</p>
            </div>
            {/* Iconos a la derecha */}
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/rocafiel_zona.este/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="text-red" />
              </a>
              <a
                href="https://www.facebook.com/RocafielZonaEste"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com/@RocafielZonaEste"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://wa.me/591XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </footer>
      </AdvancedModel.Footer>
    </AdvancedModel>
  );
};

export default ZonaEsteCongre;
