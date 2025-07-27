import AdvancedModel from "../AdvancedModel";
import styled from "styled-components";
import logo from "../../../../img/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FadeContent from "../../../../components/effects/FadeContent";
import BlurText from "../../../../components/effects/BlurText";
import jovenesportada from "../../../../img/zonaesteitems/jovenesportada.jpg";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 90%;
    height: auto;

    @media (max-width: 768px) {
      max-width: 70%;
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

const ZonaEsteCongre = () => {
  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <AdvancedModel backgroundColor="#DC3C22">
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
          backgroundImage={jovenesportada}
        />
      </FadeContent>
      <BottomShape>
        <svg viewBox="10 -3 900 67 " preserveAspectRatio="none">
          <path d="M1200 0L0 0 -892.25 80 1000 0z" />
        </svg>
      </BottomShape>

      <AdvancedModel.Video>
        <video
          src="/pre2.mp4"
          width="50%"
          loop
          playsInline
          controls
          style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
        >
          Tu navegador no soporta el video.
        </video>
        <div className="flex flex-col justify-center">
          <BlurText text="Jovenes Zona Este" className="text-4xl mb-8 ml-5 " />
          <BlurText
            text="Zona Este se caracteriza por ser una congregación llena de jóvenes y niños de todas las edades que se encuentran en la zona este de la ciudad de Monterrey, México. Esta congregación se encuentra en la ciudad de Monterrey, México, y se caracteriza por ser una comunidad acogedora y respetuosa, con una atención especial a la salud y bienestar de sus miembros. Nos esforzamos por ser una comunidad acogedora y respetuosa, y nos esforzamos por ayudar a cada uno de nosotros a alcanzar nuestros objetivos y lograr nuestras metas. Juntos, somos más fuertes y más unidos que nunca. ¡Que disfrutes de esta experiencia única y agradable!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 ml-5"
          />
        </div>
      </AdvancedModel.Video>

      <AdvancedModel.LocationSection
        address="Av. Carlos Loayza Beltran, La Paz"
        horario="8:00 PM - 9:30 PM"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.441034829883!2d-68.10695319999999!3d-16.5038175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21c99c709177%3A0x2b6a9aeada63abec!2sROCAFIEL%20ZONA%20ESTE%20-%20Congregaci%C3%B3n%20Cristiana!5e0!3m2!1ses-419!2sbo!4v1751904892497!5m2!1ses-419!2sbo"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </AdvancedModel.LocationSection>

      <AdvancedModel.Footer>
        <footer className="bg-black text-white px-6 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-start space-y-2">
              <div className=" rounded-full h-22 w-22 flex items-center justify-center">
                <img src={logo} alt="Logo" className="h-30 w-auto" />
              </div>
              <p className="font-medium">Av. Carlos Loayza Beltran, La Paz</p>
              <p>La Paz, Bolivia</p>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">RECURSOS</h3>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <span className="material-icons">podcasts</span>
                <span>Podcast</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <span className="material-icons">music_note</span>
                <span>MiSion Música</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-gray-400"
              >
                <span className="material-icons">chat</span>
                <span>Mensajes Misión</span>
              </a>
            </div>

            {/* Columna 3: Contacto */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">CONTACTO</h3>
              <p>Teléfono: + (5411) 4290 - 0000</p>
              <p>WhatsApp: +5491176060023</p>
              <p>Email: info@misioninstituto.com</p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/RocafielZonaEste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                className=" bg-white rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
            <a
              href="https://wa.me/591XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon
                className=" bg-white rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
            <a
              href="https://www.youtube.com/@RocafielZonaEste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon
                className=" bg-white rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
            <a
              href="https://www.instagram.com/rocafiel_zona.este/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                className=" bg-white rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
          </div>

          {/* Footer Inferior */}
        </footer>
        <div className="bg-white p-10 flex flex-row justify-center text-sm text-gray-400">
          <p className="mr-25">Copyright © 2025</p>
          <p className="mr-25">MiSion Centro de Entrenamiento Ministerial</p>
          <a href="#" className="hover:text-white">
            Políticas De Privacidad
          </a>
        </div>
      </AdvancedModel.Footer>
    </AdvancedModel>
  );
};

export default ZonaEsteCongre;
