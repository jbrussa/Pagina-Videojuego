import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Fondo = styled.div`
  background-image: url("/img/section2.jpg");
  background-size: cover /* Hace que la imagen cubra todo el contenedor */;
  background-position: center /* Centra la imagen */;
  width: 100%;
  height: 100vh /* Hace que el contenedor cubra toda la altura de la pantalla */;
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
  background-color: rgb(0, 0, 0, 0.6);
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  font-size: 3.5rem;
  text-align: center;
  color: white;
  font-weight: 400;
`;

export const TextoNoticias = styled.p`
  font-size: 1.2rem;
  color: white;
`;

export const Noticia = styled(Box)`
  width: 99%;
  height: 7vh;
  border-radius: 0.6rem;
  margin: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    background-color: rgb(161, 161, 161, 0.2);
  }
`;

/* Objeto */

export const DividerStyle = {
  width: "95%",
  backgroundColor: "rgb(161, 161, 161, 0.5)",
};
