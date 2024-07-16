import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "@emotion/styled";
import { Box } from '@mui/material';

export const CarouselContainer = styled(Box)`
  width: 80%;
  margin: auto;
`;

export const ImageContainer = styled(Box)`
  img {
    width: 100%;
  }
`;


 export const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

 
