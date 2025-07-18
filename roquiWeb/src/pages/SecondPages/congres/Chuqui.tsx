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
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t51.75761-15/491423144_18075569107833789_4228964186892785261_n.webp?stp=dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=90N_dR_nthMQ7kNvwGwiThh&_nc_oc=AdmX5jmEw_zp1LbaWQTDpjceoZHvOfIQrMkI3xPYIjyxWUJXEGc_VeT6JX6qsPg6lBE&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=lYFo0HmlyQtbAvBb42OwXA&oh=00_AfRxKYpF3v6Z8WABbk69W7ECsve2hXoYvWQB8UR3oEGgjg&oe=687FC120`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t51.75761-15/488705896_18073781011833789_4908523848001542869_n.jpg?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9TFma1acL-cQ7kNvwFt71j_&_nc_oc=AdmHQ5i4yFsdapqISlN3eEO0MN6eJmQoaNoV4zxmlmaUVm8Vh94H7mZatTdBIY5fHy4&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=oWB-mGauGTVQyZKZqGa9EQ&oh=00_AfQ-mZ7PyQTJjXWqNAEVsXkIgmOQfAlLvXzcVanD4QTEOg&oe=687FCA26`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t51.75761-15/468132943_18060820069833789_5753818326378472463_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W0HSlt0s-6MQ7kNvwFM9262&_nc_oc=AdnbLNBj3o14Sf4VRmLaMMvh-xwuiJtQkgh80V8fWTjeLieNqZKXptpIGDqBelO4Fp8&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=o0RtgkosWV0IOiXPw7_MEg&oh=00_AfTSjCcH-qaWa1Eci3YqRhII3msDGhVZM5g93HdzezknTw&oe=687FB8CA`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/482979956_681352107791169_1859432032609172365_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UEw0Bw2lrN0Q7kNvwF-QoZ0&_nc_oc=Adnf-LDhlhU3w77lR2ICcyTYdm04L69uulMS5Q1h4ZBxOpyGUNHZuZGldaRaG4cIuCs&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=fJwU_TdP_e7wLU61iPzxZQ&oh=00_AfQQB-YSPDGZ3U-vaFhim3IZSVM83BysBsGjffHBinnRoQ&oe=687FDC8F`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t51.75761-15/464512903_18057971536833789_4060372419414729228_n.jpg?stp=dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G7JAetnt5ncQ7kNvwGmpaVJ&_nc_oc=AdkVBTRLtj8ptYutYVJqOM9r5lVT_mKM6n5FhwARSk2Kklj-P62jTthUjfgC5D-nPxs&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=A-3JJFSbibeSuryfeGdgnw&oh=00_AfRW1DWyY_inLfqdG6CqEQSAaY6OVSEXQKdbT7GBoAWAYA&oe=687FC701`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/483103889_680964867829893_6696220527209472793_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BgDDfSKgNL8Q7kNvwGDAhHA&_nc_oc=AdlyGk58agbPkPjlj2xHD0Xn0CN-pIRcFwC0UOCKAfLY30_JvqsncdN0C37VCpp01dc&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=_M_fCS_mTyO1qeTjw9u7Cw&oh=00_AfT33cW5osTNgKStB6K2SCy4VRkj1UWTbruUD6Lf1WXsng&oe=687FDE7F`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/483102394_680945621165151_7566947738515233564_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3_U7vLU6xEsQ7kNvwFEPg0u&_nc_oc=AdlNpSsRI4WQhWbCoHEpJcJdC5uaIFJ9skAvGcridZBf2-LtlW2ugpPZ0kSHdYyILkY&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=bdfmOI820l0_gSXJiDBhrg&oh=00_AfRSGUlOTNjzSa5FgUKMfEb4-Yb1kTZIwvpeF0xTKQwDPg&oe=687FBCEE`,
  },
  {
    image: `https://scontent.flpb3-1.fna.fbcdn.net/v/t39.30808-6/482018697_679935614599485_8819981020109331013_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tdA5wNcgxesQ7kNvwEQP740&_nc_oc=AdkNeHsRcUIZZgjZGpfm_Tdje0wE19aCIxneFzl_mkedaFYuc4Vdi9YSQ1LU5UxCl34&_nc_zt=23&_nc_ht=scontent.flpb3-1.fna&_nc_gid=aMjUMv7drlydBrpYTubQhQ&oh=00_AfQhm9Zqb_ts9jLGZ-AUD0dJ5B1n9QMChOZ__Dr8AUQu3Q&oe=687FE780`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/481901308_674991835093863_4603041517553792212_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MB4XFq1_zFAQ7kNvwFdzIZx&_nc_oc=AdnpSnwLIr_sWv2LpBhnQKqmX_LBBaOkUpLRy6R72c3BUjGua_2qPmAOgLWZIXjlFRY&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=wh9klbexKH_zOIXQ3tHcaA&oh=00_AfSCWvdxuYnEZoMDrzlVdNZj2np7Dhx0Jt3TXwGHLZ4uOg&oe=687FE598`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/515494600_1161066642725106_3621135472991877522_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=k2ZAjtVsDQoQ7kNvwF75org&_nc_oc=AdmvAtuGAWIT9RUvEnSJJyldJXIpTK6gd9QgK8PinUx4SLolLwp7zsnq4OD4q8czx3s&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=JHERVT6R-RYcSD3RtZfLOA&oh=00_AfRUGLfqghI3Gx2i060x-u6_bd27E5D7p0hU6qktDHjbkA&oe=687FC458`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t51.75761-15/496796882_18356752597199452_8220083068897906091_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QZsecu4tmKUQ7kNvwHKBRU-&_nc_oc=AdmgLU89i6KH70U1aBtlwGESdUW1I4nZqang2Ef0haCCxVP65nEysFs3v7Km1qhahbs&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=eOaIohMeS7r-08dZOVUiiw&oh=00_AfRj1TNeSSyMYRB7_CNy0l2AEjs8noAWaEuJ9Ft-TcBWnA&oe=687FC598`,
  },
  {
    image: `https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/484816665_681695937756786_7430700842524571779_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UbK6pWj-Kg0Q7kNvwEfkCcK&_nc_oc=AdlQJwlakdZ-xRbMe7igIdBW-_05CEgUop3K2VWAGE8GIdLBkT_NTB9rDohRle5z5lw&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=5VLDufGmfknHE0zmOK4sTw&oh=00_AfQGJPj4Yh_mO7lM5nrZ4Nu5uT3znPAb8qAHbj6lV1NwRQ&oe=687FE627`,
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
          backgroundImage="https://scontent.flpb3-2.fna.fbcdn.net/v/t39.30808-6/482347677_680303604562686_4658174191753132932_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zAhFX3HlsnMQ7kNvwHM_elV&_nc_oc=AdkmGOGAL7vpkQI_6hWVpjAea__TBmsRlVwLxZiEpCfTc_6cH6MAjgVgt8jUXIeqgFE&_nc_zt=23&_nc_ht=scontent.flpb3-2.fna&_nc_gid=Jnc5ng9u2cgdhsz-3m0Hrg&oh=00_AfTu6lsJ4QIIx8Tsp_vVqgT4RxhZUp5P0VKBTQanKUCmaw&oe=687FC9CC"
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
