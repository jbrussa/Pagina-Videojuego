import React from "react";
import { Fondo, Filtro, ContenedorNoticias, ContenedorTexto, ContenedorTitulo, TextoTitulo, Line } from "./styles/Section2.js";
import { Carrusel } from "./Carrusel.jsx";

export const Section2 = () => {
  return (
    <>
      <Fondo>
        <Filtro>

        <ContenedorTitulo>
          <Line />
          <TextoTitulo>Noticias</TextoTitulo>
          <Line />
        </ContenedorTitulo>

          <ContenedorNoticias>
              <Carrusel></Carrusel>
              <ContenedorTexto>a</ContenedorTexto>
          </ContenedorNoticias>
        


        </Filtro>
      </Fondo>
    </>
  );
};
