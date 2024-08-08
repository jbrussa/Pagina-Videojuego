import styled from "@emotion/styled";

// TO DO: poner modo sin espacios a los costados del navbar, asi el boton descargar queda a la derecha,
// pero ver si queda bien tambien el logo a la izquierda, y sino poner un bloque vacio

/* Componentes */
export const Logo = styled.div`
  background-image: url("/img/logoGenshin.png");
  background-size: contain; /* Hace que la imagen cubra todo el contenedor */
  background-position: center /* Centra la imagen */;
  width: 10vw;
  height: 10vh;
  position: relative; /* Permite agregar contenido encima de la imagen */
  background-repeat: no-repeat;
  margin-top: -0.5rem;
`;

export const ContenedorLogo = styled.div`
  width: 10vw;
  height: 9vh;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
`;

export const BotonDescargar = styled.img`
  height: 10%;
  width: auto;
  justify-self: flex-end;
`;
/* Objetos que se agregan a MUI */

export const EstiloNavbar = {
  backgroundColor: "rgba(36, 36, 36, 0.8)",
  position: "sticky",
  top: "0",
  zIndex: "100",
  height: "9%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const EstilosToolbar = {
  display: "flex",
};
