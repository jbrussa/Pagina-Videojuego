import React from "react";
import {
  Zona,
  TextoTitulo,
  Filtro,
  Personaje,
  Linea,
  ContenedorZona,
  Imagen,
} from "./styles/Section3.js";
import { useState } from "react";

export const Section3 = () => {
  // Estado para controlar la visibilidad del tooltip
  const [isVisibleMondstadt, setIsVisibleMondstadt] = useState(false);
  const [isVisibleLiyue, setIsVisibleLiyue] = useState(false);
  const [isVisibleInazuma, setIsVisibleInazuma] = useState(false);
  const [isVisibleSumeru, setIsVisibleSumeru] = useState(false);
  const [isVisibleFontaine, setIsVisibleFontaine] = useState(false);

  return (
    <>
      {/* Mondstadt */}
      <ContenedorZona>
        <Zona
          onMouseEnter={() => setIsVisibleMondstadt(true)}
          onMouseLeave={() => setIsVisibleMondstadt(false)}
        >
          <Imagen bgImg="/img/section3/MondstadtRecorte.jpg"></Imagen>
          <Filtro></Filtro>
          <TextoTitulo>Mondstadt</TextoTitulo>
          <Personaje
            bgImg="/img/section3/personajeMondstadt.png"
            isVisible={isVisibleMondstadt}
          ></Personaje>
          <Linea isVisible={isVisibleMondstadt}></Linea>
        </Zona>
      </ContenedorZona>

      {/* Liyue */}
      <ContenedorZona>
        <Zona
          onMouseEnter={() => setIsVisibleLiyue(true)}
          onMouseLeave={() => setIsVisibleLiyue(false)}
        >
          <Imagen bgImg="/img/section3/LiyueRecorte.jpg"></Imagen>
          <Filtro></Filtro>
          <TextoTitulo>Liyue</TextoTitulo>
          <Personaje
            bgImg="/img/section3/personajeLiyue.png"
            isVisible={isVisibleLiyue}
          ></Personaje>
          <Linea isVisible={isVisibleLiyue}></Linea>
        </Zona>
      </ContenedorZona>

      {/* Inazuma */}
      <ContenedorZona>
        <Zona
          onMouseEnter={() => setIsVisibleInazuma(true)}
          onMouseLeave={() => setIsVisibleInazuma(false)}
        >
          <Imagen bgImg="/img/section3/InazumaRecorte.jpg"></Imagen>
          <Filtro></Filtro>
          <TextoTitulo>Inazuma</TextoTitulo>
          <Personaje
            bgImg="/img/section3/personajeInazuma.png"
            isVisible={isVisibleInazuma}
          ></Personaje>
          <Linea isVisible={isVisibleInazuma}></Linea>
        </Zona>
      </ContenedorZona>

      {/* Sumeru */}
      <ContenedorZona>
        <Zona
          onMouseEnter={() => setIsVisibleSumeru(true)}
          onMouseLeave={() => setIsVisibleSumeru(false)}
        >
          <Imagen bgImg="/img/section3/SumeruRecorte.jpg"></Imagen>
          <Filtro></Filtro>
          <TextoTitulo>Sumeru</TextoTitulo>
          <Personaje
            bgImg="/img/section3/personajeSumeru.png"
            isVisible={isVisibleSumeru}
          ></Personaje>
          <Linea isVisible={isVisibleSumeru}></Linea>
        </Zona>
      </ContenedorZona>

      {/* Fontaine */}
      <ContenedorZona>
        <Zona
          onMouseEnter={() => setIsVisibleFontaine(true)}
          onMouseLeave={() => setIsVisibleFontaine(false)}
        >
          <Imagen bgImg="/img/section3/FontaineRecorte.png"></Imagen>
          <Filtro></Filtro>
          <TextoTitulo>Fontaine</TextoTitulo>
          <Personaje
            bgImg="/img/section3/personajeFontaine.png"
            isVisible={isVisibleFontaine}
          ></Personaje>
          <Linea isVisible={isVisibleFontaine}></Linea>
        </Zona>
      </ContenedorZona>
    </>
  );
};
