import { Contenedor, Entrada, Foto, ContenedorTitulo, ContenedorEntradas } from "./styles/Disponbilidad";

export const Disponibilidad = () => {
  return(
    <Contenedor>
      <ContenedorTitulo> Descarga ya disponible en todas las plataformas</ContenedorTitulo>
      <ContenedorEntradas> 
      <Entrada>
        <img style={Foto}   src="/img/descargaAppStore.png" alt="entrada"></img>
      </Entrada>

      <Entrada>
        <img style={Foto}   src="/img/descargaGooglePlay.png" alt="entrada"></img>
      </Entrada>

      <Entrada>
        <img style={Foto}   src="/img/descargaEpicStore.png" alt="entrada"></img>
      </Entrada>

      <Entrada>
        <img style={Foto}   src="/img/descargaPlay.png" alt="entrada"></img>
      </Entrada>

      <Entrada>
        <img style={Foto}   src="/img/descargaPC.png" alt="entrada"></img>
      </Entrada>

      <Entrada vacio='true'>
      </Entrada>
      </ContenedorEntradas>
      
    </Contenedor>
  )
};

/* De esta forma puedo definir varios componentes */
