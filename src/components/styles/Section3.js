import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Zona = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover /* Hace que la imagen cubra todo el contenedor */;
  background-position: center /* Centra la imagen */;
  height: 28vh;
  width: 99vw;
  position: relative; /* Permite agregar contenido encima de la imagen */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
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
  font-size: 2rem;
  text-align: center;
  color: white;
  font-weight: 400;
  z-index: 3;
  position: absolute;
`;

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

export const Personaje = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
  width: 100%;
  height: 100%;
  background-position: right /* Centra la imagen */;
  z-index: 4;
  background-repeat: no-repeat;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 1000ms
    forwards;
  border: 0.2rem solid white;
`;

export const BordesYLineas = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
