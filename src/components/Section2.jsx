import React from "react";
import {
  Fondo,
  Filtro,
  ContenedorNoticias,
  ContenedorTexto,
  ContenedorTitulo,
  TextoTitulo,
  Line,
  DividerStyle,
  TextoNoticias,
  Noticia,
} from "./styles/Section2.js";
import { Carrusel } from "./Carrusel.jsx";
import Divider from "@mui/material/Divider";

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
            <ContenedorTexto>
              <Noticia>
                <TextoNoticias>Noticia 1</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias>Noticia 2</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias>Noticia 3</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias>Noticia 4</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias>Noticia 5</TextoNoticias>
              </Noticia>
            </ContenedorTexto>
          </ContenedorNoticias>
        </Filtro>
      </Fondo>
    </>
  );
};
