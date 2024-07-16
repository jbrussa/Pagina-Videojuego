import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "@emotion/styled";
import { Box } from '@mui/material';

export const CarouselContainer = styled(Box)`
  width: 40vw;
  height: 50vh;
  margin: auto;
  background-size: contain;
`;

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Altura fija para el contenedor */
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    max-height: 100%
  }
`;


/* Objetos */

 export const Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Habilitar autoplay
  autoplaySpeed: 10000 // Velocidad de autoplay en milisegundos (10 segundos)
  };



 
