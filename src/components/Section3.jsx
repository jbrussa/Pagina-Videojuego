import React from "react";
import {
  Zona,
  Estrellas,
  TextoTitulo,
  Filtro,
  Personaje,
  BordesYLineas,
} from "./styles/Section3.js";
import { useState } from "react";

export const Section3 = () => {
  // Estado para controlar la visibilidad del tooltip
  const [isVisible, setIsVisible] = useState(false);

  // Funciones para mostrar/ocultar el tooltip
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <>
      <Zona
        bgImg="/img/section3/MondstadtRecorte.jpg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Filtro></Filtro>
        <TextoTitulo>Mondstadt</TextoTitulo>
        {isVisible && (
          <>
            <Personaje
              bgImg="/img/section3/personajeMondstadt.png"
              isVisible={isVisible}
            ></Personaje>
            <BordesYLineas>a</BordesYLineas>
          </>
        )}
      </Zona>
    </>
  );
};
