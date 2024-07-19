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
import Divider from '@mui/material/Divider';


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
                <TextoNoticias> aaaaaaa</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>
              
              <Noticia>
                <TextoNoticias> aaaaaaa</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias> aaaaaaa</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias> aaaaaaa</TextoNoticias>
              </Noticia>
              <Divider sx={DividerStyle}></Divider>

              <Noticia>
                <TextoNoticias> aaaaaaa</TextoNoticias>
              </Noticia>

              


            </ContenedorTexto>
          </ContenedorNoticias>
        </Filtro>
      </Fondo>
    </>
  );
};
