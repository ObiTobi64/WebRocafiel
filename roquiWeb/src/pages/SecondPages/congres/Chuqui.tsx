import AdvancedModel from "./AdvancedModel";
import logo from "../../../img/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FadeContent from "../../../components/effects/FadeContent";

const ChuquiCongre = () => {
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
      title="Congregación Chuquiaquillo"
      backgroundVideo="/fondoo.mp4" />
      </FadeContent>

      <AdvancedModel.Video>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ppXJctCACrI?si=BdfBPrFmOr-4zthf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </AdvancedModel.Video>  

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


export default ChuquiCongre;
