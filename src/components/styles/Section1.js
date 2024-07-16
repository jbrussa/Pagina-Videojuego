import styled from "@emotion/styled";

export const Fondo = styled.div`
  background-image: url("/img/section1.jpg");
  background-size: cover /* Hace que la imagen cubra todo el contenedor */;
  background-position: center /* Centra la imagen */;
  width: 100%;
  height: 102vh /* Hace que el contenedor cubra toda la altura de la pantalla */;
  position: relative; /* Permite agregar contenido encima de la imagen */
  margin-top: -12vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
