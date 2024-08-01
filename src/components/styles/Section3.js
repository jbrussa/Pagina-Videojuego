import styled from "@emotion/styled";
import { keyframes, css } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Imagen = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease; /* Suaviza la transición del zoom */
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover /* Hace que la imagen cubra todo el contenedor */;
  background-position: center /* Centra la imagen */;
  position: absolute;
  overflow: hidden;
  &:hover {
    transform: scale(1.1); /* Aplica el zoom */
  }
`;

export const ContenedorZona = styled.div`
  height: 28vh;
  width: 99vw;
  overflow: hidden;
  & :hover img {
    transform: scale(1.1);
  }
`;

export const Zona = styled.div`
  height: 100%;
  width: 100%;
  position: relative; /* Permite agregar contenido encima de la imagen */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
  overflow: hidden;
  transition: transform 0.5s ease;
  & :hover {
    animation: ${fadeIn} 300ms forwards;
    opacity: 1;
  }
`;

export const Filtro = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Fondo negro semitransparente */
  z-index: 1;
`;

export const Estrellas = styled.div`
  background-image: url("/img/section3/estrella.webp");
  background-size: cover /* Hace que la imagen cubra todo el contenedor */;
  background-position: center /* Centra la imagen */;
  width: 10vw;
  height: 10vh;
  opacity: 0.5;
  position: absolute;
  z-index: 2;
`;

export const TextoTitulo = styled.h1`
  font-size: 2.25rem;
  text-align: center;
  color: white;
  font-weight: 400;
  z-index: 5;
  position: absolute;
  font-family: Tahoma, Helvetica, Arial, sans-serif;
`;

export const Personaje = styled.div`
  width: 100%;
  height: 100%;
  background-position: right;
  z-index: 4;
  background-repeat: no-repeat;
  background-image: url(${({ bgImg }) => bgImg});
  box-shadow: inset 0 0 0 0.3rem white; /* Crea el borde blanco hacia adentro */
  opacity: 0;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${fadeIn} 400ms forwards;
        `
      : css`
          animation: ${fadeOut} 400ms forwards;
        `};
`;

export const Linea = styled.div`
  position: absolute;
  width: 9%;
  height: 0.8%;
  align-self: center;
  justify-self: center;
  margin-top: 3rem;
  background: linear-gradient(
    to right,
    transparent,
    #fbfdfe 45% 55%,
    transparent
  );
  z-index: 5;
  opacity: 0;
  overflow: hidden;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${fadeIn} 400ms forwards;
        `
      : css`
          animation: ${fadeOut} 400ms forwards;
        `};
`;
