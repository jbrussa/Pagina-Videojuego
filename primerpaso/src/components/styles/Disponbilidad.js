import styled from "@emotion/styled";

export const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  width: 60vw;
  overflow: hidden;
`;

export const ContenedorTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 60vw;
  font-family: sans-serif;
  color: white;
  font-size: 1.8rem;
  padding: 1rem;
  text-shadow: 2px 2px 5px rgba(235, 201, 52, 0.8); /* Sombra del texto */
  text-align: center;
`;

export const ContenedorEntradas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
  width: 40vw;
  flex-wrap: wrap-reverse;
  margin-bottom: 1.5rem;
  margin-top: -1.5rem;
`;


export const Entrada = styled.div`
 background-color: ${({vacio}) => vacio ? '' : 'black' };
 height: 8vh;
 width: 11vw;
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 0.4rem;
 border: ${({vacio}) => vacio ? '' : '0.1em solid grey' };
`;

export const Foto = styled.img`
  width: 100%;
  height: auto;
`;



/* Objetos */

/* export const Foto = {
    backgroundSize: "contain", /* Hace que la imagen cubra todo el contenedor */
  //  padding: "0.5rem"
    
 // }; */