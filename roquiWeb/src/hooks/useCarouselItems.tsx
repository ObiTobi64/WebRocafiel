import image1 from '../img/Chuqui.png';
import image2 from '/ZonaEste.png';
import image3 from '../img/elAlto.png';
import image4 from '../img/Kramer.png';
import image5 from '../img/SanCruz.png';
import image6 from '../img/Cocha.png';

export interface CarouselItem {
  image: string;
  alt: string;
  congreId: string;
}

export const useCarouselItems = (): CarouselItem[] => [
  { image: image1, alt: "ChuquiLogo", congreId: "chuqui" },
  { image: image2, alt: "ZonaEsteLogo", congreId: "zona-este" },
  { image: image3, alt: "ElAltoLogo", congreId: "el-alto" },
  { image: image4, alt: "KramerLogo", congreId: "kramer" },
  { image: image5, alt: "SantaCruzLogo", congreId: "santa-cruz" },
  { image: image6, alt: "CochaLogo", congreId: "cocha" },
];

