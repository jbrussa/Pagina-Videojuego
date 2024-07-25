import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ContainerFooter = styled.div`
  height: 30vh;
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
  height: 22vh;
  width: 99vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerTextoSuscripcion = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerInputSuscripcion = styled.div`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextoSuscripcion = styled.div`
  height: 10vh;
  width: 60%;
  margin-left: 2rem;
  font-family: Tahoma, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  color: rgb(204, 208, 210);
  margin-bottom: 2.5rem;
  margin-left: 7rem;
  line-height: 1.5;
  word-spacing: 0.1rem;
`;

export const TituloSuscripcion = styled.div`
  height: 10vh;
  width: 80%;
  margin-left: 2rem;
  font-family: Tahoma, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  color: rgb(230, 231, 233);
  font-weight: 700;
  margin-top: 2rem;
  margin-left: 7rem;
`;

export const IconStyle = styled.div`
  color: #999999;
  font-size: 1.7rem;
  margin: 0 2.7rem;
  transition: color 0.2s;

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

export const InputStyle = {
  width: "40%",
  borderRadius: "5rem",
  color: "rgb(187, 155, 108)",
  "& label.Mui-focused": {
    color: "#bb9b6c", // Color del label cuando está enfocado
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#323339", // Color del borde cuando no está enfocado
    },
  },
  "&:hover fieldset": {
    borderColor: "#323339", // Color del borde al pasar el mouse
  },
  "&.Mui-focused fieldset": {
    borderColor: "#bb9b6c", // Color del borde cuando está enfocado
  },
};
