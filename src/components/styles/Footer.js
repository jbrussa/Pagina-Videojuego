import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContainerFooter = styled.div`
  height: 40vh;
  width: 99vw;
  background-color: #111111;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contacto = styled.div`
  height: 6vh;
  width: 99vw;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerSuscripcion = styled.div`
  height: 15vh;
  width: 99vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerTextoSuscripcion = styled.div`
  height: 15vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextoSuscripcion = styled.div`
  height: 10vh;
  width: 30%;
  margin-left: 2rem;
  font-family: Tahoma, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
`;

export const TituloSuscripcion = styled.div`
  height: 10vh;
  width: 30%;
  margin-left: 2rem;
  font-family: Tahoma, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  color: rgb(204, 208, 210);
`;

export const IconStyle = styled.div`
  color: #999999;
  font-size: 1.7rem;
  margin: 0 2.7rem;
  transition: color 0.3s;

  &:hover {
    color: #ffffff;
  }
`;

/* Objeto */

export const DividerStyle = {
  width: "100%",
  backgroundColor: "rgb(50, 50, 50)",
  height: "0.02vh",
};

export const IconsStyle = {
  color: "#999999",
  fontSize: "1.7rem",
  margin: "0 2.7rem",
};
