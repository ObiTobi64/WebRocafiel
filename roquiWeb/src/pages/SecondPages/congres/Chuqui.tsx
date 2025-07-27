import AdvancedModel from "./AdvancedModel";
import styled from "styled-components";
import logo from "../../../img/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FadeContent from "../../../components/effects/FadeContent";
import BlurText from "../../../components/effects/BlurText";
import CircularGallery from "../../../components/effects/CircularGallery";
import jovenes from "../../../img/chuqui/jovenes.jpg";
import c1 from "../../../img/chuqui/c1.jpg";
import { Link } from "react-router-dom";

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

const myItems = [
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
  {
    image: `${c1}`,
  },
];

const ChuquiCongre = () => {
  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <AdvancedModel backgroundColor="#F1EFEC">
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
                  src="/minilChuqui.png"
                  alt="Jóvenes de Avanzada"
                  width={600}
                  style={{ marginBottom: "50px" }}
                />
              </BannerContent>
            </TitleWrapper>
          }
          backgroundVideo="/fondoo.mp4"
        />
      </FadeContent>

      <AdvancedModel.Video>
        <iframe
          width="250%"
          height={515}
          src="https://www.youtube.com/embed/ppXJctCACrI?si=BdfBPrFmOr-4zthf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col justify-center">
          <BlurText
            text="Rocafiel Chuquiaquillo"
            className="text-4xl mb-8 ml-10 "
          />
          <BlurText
            text="Bienvenido a Rocafiel Chuquiaquillo, donde nos encontramos con los jóvenes de la zona este de la ciudad de Monterrey, México. Estamos aquí para brindarte una experiencia única y agradable, con una atención especial a la salud y bienestar de nuestros miembros. Nos esforzamos por ser una comunidad acogedora y respetuosa, y nos esforzamos por ayudar a cada uno de nosotros a alcanzar nuestros objetivos y lograr nuestras metas. Juntos, somos más fuertes y más unidos que nunca. ¡Que disfrutes de esta experiencia única y agradable!"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 ml-10"
          />
        </div>
      </AdvancedModel.Video>

      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            items={myItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </FadeContent>

      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.IntroSection
          backgroundImage={jovenes}
          logoSrc="https://avanzadacatolica.com/wp-content/webp-express/webp-images/uploads/2022/06/logoJMac.png.webp"
          leftTitle="Conoce"
          rightTitle="JRF Chuquiaquillo"
          rightText="Nos flechó el dardo de la Santidad y, como el fuego encendería el leño, nos prendimos de felicidad."
          rightCallToAction="¿Quieres saber más?"
          rightButtonText="Ir a Jóvenes"
          rightButtonHref="jovenes"
        />
      </FadeContent>

      <AdvancedModel.LocationSection
        address="Av. Carlos Loayza Beltran, La Paz"
        schedule="8:30 AM - 10:00 AM"
        schedule2="10:30 AM - 12:30 PM"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d138687.50746997955!2d-68.1313705!3d-16.48251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f1fd8c31e77cd%3A0x638435c6a34d07b0!2sROCAFIEL%20-%20Congregaci%C3%B3n%20Cristiana!5e1!3m2!1ses-419!2sbo!4v1752818980675!5m2!1ses-419!2sbo"
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
            <Link
              to="https://www.facebook.com/rocafielcongregacioncristiana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </Link>
            <Link
              to="https://wa.me/591XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon
                color="success"
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </Link>
            <Link
              to="https://www.youtube.com/@rocafielcc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon
                color="error"
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </Link>
            <Link
              to="https://www.instagram.com/rocafielcc?utm_source=ig_web_button_share_sheet&igsh=MXdrajhxbGwwNTlrdQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                color="info"
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </Link>
          </div>

          {/* Footer Inferior */}
        </footer>
        <div
          style={{ backgroundColor: "#F8F8F8" }}
          className=" p-10 flex flex-row justify-center text-sm text-gray-400"
        >
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

export default ChuquiCongre;
