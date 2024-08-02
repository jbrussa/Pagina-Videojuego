import styled from "@emotion/styled";

export const ContainerFooter = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #111111;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contacto = styled.div`
  height: 6vh;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const ContainerSuscripcion = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerTextoSuscripcion = styled.div`
  height: 90%;
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerInputSuscripcion = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container2InputSuscripcion = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

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
height: 70%;
background-color: #cdbb97;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
margin: 0.5rem;
`
export const ContainerTerminosYCondiciones = styled.div`
height: 35%;
width: 60%;
display: flex;
align-items: center;
justify-content: center;

`
export const TextoTerminosYCondiciones = styled.div`
font-family: Tahoma, Helvetica, Arial, sans-serif;
font-size: 0.7rem;
color: rgb(204, 208, 210);
width: 85%;
`
export const Marca = styled.div`
width: 100%;
height: 70%;
background-color: #000000;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 2rem;
box-sizing: border-box; //el padding y el borde se incluyen en el cálculo del ancho del elemento
`
export const Image = styled.img`
  width: 25%;
  height: auto;
  margin: 0.5rem;

`
export const TextoCopyright = styled.div`
font-family: Tahoma, Helvetica, Arial, sans-serif;
font-size: 0.7rem;
color: rgb(204, 208, 210);
margin: 0.5rem;
`

/* Objeto */

export const DividerStyle = {
  width: "100%",
  backgroundColor: "rgb(50, 50, 50)",
  height: "0.02vh",
};

export const InputStyle = {
  width: "55%",
  margin: "1rem",
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