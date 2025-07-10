// src/hooks/useEventImages.ts
import imagen1 from '../img/cam1.jpg';
import imagen2 from '../img/cam2.jpg';
import imagen3 from '../img/conVaro.jpg';
import imagen4 from '../img/canVaro1.jpg';

export interface EventImage {
  src: string;
  alt: string;
}

export const useEventImages = (): EventImage[] => {
  return [
    { src: imagen1, alt: 'Imagen 1' },
    { src: imagen2, alt: 'Imagen 2' },
    { src: imagen3, alt: 'Imagen 3' },
    { src: imagen4, alt: 'Imagen 4' },
  ];
};
