import Slider from 'react-slick';
import {CarouselContainer, ImageContainer, Settings} from "./styles/Carrusel"
import React from 'react'

export const Carrusel = () => {

    /* Imagenes del carrusel */
    const images = [
        '/img/carrusel/img1.png',
        '/img/carrusel/img2.avif',
        '/img/carrusel/img3.jpg',
        '/img/carrusel/img4.png',
      ]


  return (
      <CarouselContainer>
      <Slider {...Settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </ImageContainer>
        ))}
      </Slider>
    </CarouselContainer>
  )
}

