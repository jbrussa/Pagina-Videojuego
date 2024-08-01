import styled from "@emotion/styled";

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
  padding: 0.5rem;
`;

export const ContainerSuscripcion = styled.div`
  height: 30vh;
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
  flex-wrap: wrap;
  
`;

export const TextoSuscripcion = styled.div`
  height: 10vh;
  width: 60%;
  margin: 0.5rem;
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

export const BotonSuscribir = styled.div`
width: 25%;
height: 35%;
background-color: #cdbb97;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
margin: 0.5rem;
`
export const ContainerTerminosYCondiciones = styled.div`
height: 35%;
width: 50%;
display: flex;
align-items: center;
justify-content: center;

`
export const TextoTerminosYCondiciones = styled.div`
font-family: Tahoma, Helvetica, Arial, sans-serif;
font-size: 0.7rem;
color: rgb(204, 208, 210);
width: 80%;
`
export const Espacio = styled.div`
height: 35%;
width: 30%;
`

/* Objeto */

export const DividerStyle = {
  width: "100%",
  backgroundColor: "rgb(50, 50, 50)",
  height: "0.02vh",
};

export const InputStyle = {
  width: "40%",
  margin: "0.5rem",
  '& .MuiOutlinedInput-root': {
    borderRadius: '1rem',
    '& fieldset': {
      borderColor: '#323339', // color del borde
      backgroundColor: '#212226', // fondo del input
    },
    '&:hover fieldset': {
      borderColor: '#323339', // color del borde al pasar el mouse
    },
    '&.Mui-focused fieldset': {
      borderColor: '#bb9b6c', // color del borde cuando está enfocado
    },
  },
  '& .MuiInputLabel-root': {
    color: '#a0a5a9', // color del label cuando no está enfocado
    fontWeight: "100",
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#bb9b6c', // color del label cuando está enfocado
  },
};

export const CheckBoxStyle = {
  borderRadius: "3",
  color: "#505154",
  alignSelf: "start",
  '&.Mui-checked': {
      color: '#bb9b6c',
    },
} 