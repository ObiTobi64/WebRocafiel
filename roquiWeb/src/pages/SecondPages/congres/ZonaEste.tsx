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

const BottomShape = styled.div`
  position: relative;
  bottom: 25px;
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

const myItems = [
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/491353808_1103934795110386_3771580193803717707_n.jpg?stp=c205.0.1638.1638a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=67XF6vh1R4UQ7kNvwFyEnzk&_nc_oc=AdnXmpITloAv2hW4gmcKLHwVeJcU8LNFNDwIvAdmvvdBeIjH5-p_WDms5NvZwZCo-gY&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=FoVo_uj3x2UgiKMx9-6v4w&oh=00_AfQxsi-yUYh35sBsauV6e4lukul1x-8hd4y0MEF7Eb-8MA&oe=687FD474`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/488259384_1091886002981932_8746141615983076648_n.jpg?stp=c0.135.1638.1638a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=vCzYCcLFLg4Q7kNvwGDn2X9&_nc_oc=AdmU2Iuwc9YXEMVFMp47QTZvcTVN6hKDPIm1aUUXJP030RxG4uJ3eEcb6UyRYUn8xf4&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=gKqtuFx9rvYWdNfg2xnq-g&oh=00_AfS1N4fh-M_63BdxaR2rMFNgygNXHBvGV_o_HFaMPAEt7A&oe=687FEFD3`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/487542743_1089103039926895_6729856581917136525_n.jpg?stp=c0.288.1174.1174a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=X1ykIfW91mwQ7kNvwFPN3U-&_nc_oc=AdlwcnTL19KOGjBXGChC0SA9P7xFfB2sGu47tyTW1e-zIejPUzrtWUO5r5wLjZ3k4TM&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=yHyPJeldAH0I5887TA9ExA&oh=00_AfQms23iUbDsz-8gNO9QqHiVZTrnoHc5Bgj12sdx0gDk6Q&oe=687FE464`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/514416513_1159443882887382_8582801085412219265_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L9wsyfd_R9sQ7kNvwGtYlcz&_nc_oc=AdngJpoiFtt93OFq84hJy7u0Qh5vZ9e1XNeGaABuCkWV0_sYXel2tiaqjYIft6pI2PQ&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=lY9gHLGh2Vk_cuo65HiCNw&oh=00_AfSsNx0Y9q4vI6Wr1fSfsiURJgZyrvk9Zb5MAbgIPC3ecA&oe=687FF29C`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/516436792_1166805725489959_983145141967769486_n.jpg?stp=c129.0.1026.1026a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=CHXFrLUPM-EQ7kNvwGHWSzj&_nc_oc=Adnr-kXmn-v47_LZtKMhkiFYMCXJe936XiYkJetK3fJ7DfPUtmM-SEHgBQVJPCQ9D4U&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=b5_wXRPyFcPgKz62YcMadQ&oh=00_AfQ9keF3XkObFpGoTVyznqfvrO_JOaPHNtg9plIxs-a37A&oe=687FEAA7`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/490522073_1103937771776755_7252226977468167980_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KX7mVqIKQycQ7kNvwGldi6G&_nc_oc=Adn4YII1-zKBGB5sfvkxrEEKF-V42CUZKw-6aqAKcxSQksZn_Vu4KKs0mH4HutdEqno&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=7orxU8lWlA4Q2KdMghuSMQ&oh=00_AfT37tPtVPtgyiQSSb8uNp5K5PSQGfOhXTqeedJmeDa7YQ&oe=687FD7A5`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/506614548_1149952690508596_8563783359628372446_n.jpg?stp=c189.0.906.906a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=FbLb8Orwi5AQ7kNvwHDafyh&_nc_oc=AdliosuSPXhL3G1gftrxDAuEDNZPx2AP7QPDXcWzHhW9EaQ6mfJYz1BCHuk0MU9CvlY&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=98VsczIgDSA2U7LD9Aw-XQ&oh=00_AfTMRQDv_V99FI82GMBaSVhNVfyIayraCzfJx1XZBpZ9uQ&oe=687FD82B`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/514412652_1161066799391757_7020666107863887743_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XMvPXeOZC58Q7kNvwFku9qc&_nc_oc=AdlRXQi2Xt9qsBfnUZYUKVjzTCXoapKBfIIUWtQJLHYBSAhFUOFGwTvX6Px8L25m-_I&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=TeftTqyaX1a8B3rvX8QAsg&oh=00_AfR3GjvlE19oUs-W2cZcAvH6551NgcxIAKCzz4AQrcp_jw&oe=687FD362`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/486952397_1087424356761430_8085302935132955753_n.jpg?stp=c205.0.1638.1638a_dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=nScGPTdmdyUQ7kNvwEF7xQ0&_nc_oc=AdleKCR88gtu5PlTZ9K2X2AgvfaQ07x6RTcIHQPWZrhZTWGACkME-QzggpVVFfRK2hI&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=ZPVCCvD7tRYZugFUAGEG1g&oh=00_AfSDB92FS8BZ2RFbVb94UEPKbXNiocpEopUwJG4XkuTFtw&oe=687FD26B`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/486619579_1085707680266431_3756417548782737961_n.jpg?stp=c390.0.1268.1268a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=1hfvix1RsJUQ7kNvwF9sbOC&_nc_oc=AdmuvWdthH2CAsJRNEIenNdXHyq__pQ6YjNeasUBKYTJ2eolMhKw-ZKHT4k7w0UWdfk&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=C6QSFomaILRngTDaIKbSgQ&oh=00_AfQz6lqhrnz3rj2CrLfI47Awu-9CaNPf_loVI61-e3DYKg&oe=687FBABB`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/486614235_1085461770291022_3064295335832931398_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bVXNL1kVhwAQ7kNvwHlcejw&_nc_oc=AdlzPJwzG0V7zNTGRb5HFJ9CRgcL1ctTeF4fwNKcLx2_HYEt3acHHw-HcqwFXZjvZMY&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=Th6XHj76CEZRJ3FLNC9ofw&oh=00_AfR3CDaIBZRL-kEKz2IRGaedAxszEgo6yAmBonVjTYoAIg&oe=687FD54B`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/487858058_1088031970034002_4511239609580809556_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fzOUDDCSjAkQ7kNvwG7bX7M&_nc_oc=Adlvl2OqZ0A4yNhpyA7nZATFiVIaGYJnzShyXaPdz_W3FK4rAe4w9tCT14XZvnr_exY&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=yvpkwXLuVLbXzsNPh05F1w&oh=00_AfQ3vuC4XMWOu7dNGo6wGgp76-FCEJ96Ol0XTS1hh-YXpA&oe=687FC767`,
  },
];

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
                <img src="/minil.png" alt="Jóvenes de Avanzada" width={500} />
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

      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.LocationSection
          address="Av. Carlos Loayza Beltran, La Paz"
          schedule="8:30 AM - 10:00 AM"
          schedule2="10:30 AM - 12:30 PM"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.441034829883!2d-68.10695319999999!3d-16.5038175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21c99c709177%3A0x2b6a9aeada63abec!2sROCAFIEL%20ZONA%20ESTE%20-%20Congregaci%C3%B3n%20Cristiana!5e0!3m2!1ses-419!2sbo!4v1751904892497!5m2!1ses-419!2sbo"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </AdvancedModel.LocationSection>
      </FadeContent>

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
          rightTitle="Esto Somos"
          rightText="Nos flechó el dardo de la Santidad y, como el fuego encendería el leño, nos prendimos de felicidad."
          rightCallToAction="¿Quieres saber más?"
          rightButtonText="Ir a Jóvenes"
          rightButtonHref="jovenes"
        />
      </FadeContent>

      <BottomShape
        style={{
          width: "w-full",
        }}
      >
        <svg viewBox="90 90 200 -60" preserveAspectRatio="none">
          <path d="M1200 0L0 36 1922  -2300 0z" />
        </svg>
      </BottomShape>

      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.Quote />
      </FadeContent>

      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full"
      >
        <AdvancedModel.IntroSection
          backgroundImage="https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/486541484_1083686203801912_8111031106512359757_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RHXWQ1FfPq4Q7kNvwEnAv9X&_nc_oc=Adk-jFZugXYOKkqAtpx6rd-gMx7et8GBJbw-m6m763LTfh3arBcsQsGFvKBAVziRFO8&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=ToOWW8kkxBIveYW_nQv5fA&oh=00_AfTrcinlJ5y0ZMlNYYsr97mJxExS__0pUoAJ9C16lZ7CUg&oe=687E531D"
          backgroundPosition="center 20%"
          rightTitle="Matrimonios"
          rightText="Conoce nuestros eventos de matrimonios y nuestro programa de matrimonios."
          rightCallToAction="¿Quieres saber más?"
          rightButtonText="Ir a Matrimonios"
          rightButtonHref="matrimonios"
        />
      </FadeContent>

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
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
            <a
              href="https://wa.me/591XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon
                color="success"
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
            <a
              href="https://www.youtube.com/@RocafielZonaEste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon
                color="error"
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
            <a
              href="https://www.instagram.com/rocafiel_zona.este/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                color="info"
                className="  rounded-full p-1"
                style={{ fontSize: 40 }}
              />
            </a>
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

export default ZonaEsteCongre;
