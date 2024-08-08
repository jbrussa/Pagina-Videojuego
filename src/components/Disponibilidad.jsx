import {
  Contenedor,
  Entrada,
  Foto,
  ContenedorTitulo,
  ContenedorEntradas,
} from "./styles/Disponbilidad";

export const Disponibilidad = () => {
  return (
    <Contenedor>
      <ContenedorTitulo>
        {" "}
        Descarga ya disponible en todas las plataformas
      </ContenedorTitulo>
      <ContenedorEntradas>
        <a
          href="https://apps.apple.com/us/app/genshin-impact/id1517783697"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Entrada>
            <Foto src="/img/descargaAppStore.png" alt="entrada"></Foto>
          </Entrada>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Entrada>
            <Foto src="/img/descargaGooglePlay.png" alt="entrada"></Foto>
          </Entrada>
        </a>

        <a
          href="https://store.epicgames.com/es-MX/p/genshin-impact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Entrada>
            <Foto src="/img/descargaEpicStore.png" alt="entrada"></Foto>
          </Entrada>
        </a>

        <a
          href="https://www.playstation.com/es-ar/games/genshin-impact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Entrada>
            <Foto src="/img/descargaPlay.png" alt="entrada"></Foto>
          </Entrada>
        </a>

        <a
          href="https://genshin.hoyoverse.com/es/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Entrada>
            <Foto src="/img/descargaPC.png" alt="entrada"></Foto>
          </Entrada>
        </a>

        <Entrada vacio="true"></Entrada>
      </ContenedorEntradas>
    </Contenedor>
  );
};

/* De esta forma puedo definir varios componentes */
