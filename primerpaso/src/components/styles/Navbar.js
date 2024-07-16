import styled from "@emotion/styled";

/* Componentes */
export const Logo = styled.div`
  background-image: url("/img/logoGenshin.png");
  background-size: contain; /* Hace que la imagen cubra todo el contenedor */
  background-position: center /* Centra la imagen */;
  width: 10vw;
  height: 10vh;
  position: relative; /* Permite agregar contenido encima de la imagen */
  background-repeat: no-repeat;
`;

export const ContenedorLogo = styled.div`
  width: 10vw;
  height: 9vh ;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


/* Objetos que se agregan a MUI */

export const EstiloNavbar = {
  backgroundColor: "rgba(36, 36, 36, 0.6)",
  position: "sticky",
  top: "0",
  zIndex: "100",
};

export const BotonDescargar ={
  width: "15vw",
  height: "11.3vh",
  backgroundColor: "rgb(255,207,13)",
  marginRight: "-1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const TextoDescargar = {
  color: "#242424",
  letterSpacing: "0.1rem",
  fontSize: "1.3rem",
}