import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Fondo = styled.div`
  background-image: url("/img/Noticias.avif");
  background-size: cover /* Hace que la imagen cubra todo el contenedor */;
  background-position: center /* Centra la imagen */;
  width: 100%;
  height: 120vh /* Hace que el contenedor cubra toda la altura de la pantalla */;
  position: relative; /* Permite agregar contenido encima de la imagen */
`;

export const Filtro = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px); /* Ajusta este valor según tus necesidades */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContenedorNoticias = styled(Box)`
  width: 80vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ContenedorTexto = styled(Box)`
  width: 40vw;
  background-color: rgb(0, 0, 0, 0.7);
  height: 50vh;
`;

export const ContenedorTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 8vh;
`;

//no lo use todavia
export const Line = styled.div`
  flex: 1;
  height: 0.12rem;
  margin: 0 0.1rem;
  background-color: rgb(255, 255, 255, 0.5);
`;

export const TextoTitulo = styled.h1`
  margin: 0;
  padding: 0 1rem;
  font-size: 2rem;
  text-align: center;
  color: white;
`;
