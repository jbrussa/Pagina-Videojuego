import styled from "@emotion/styled";

export const Fondo = styled.div`
  background-image: url("/img/Noticias.avif");
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
`;
