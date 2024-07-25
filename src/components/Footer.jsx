import React from "react";
import {
  ContainerFooter,
  Contacto,
  DividerStyle,
  IconStyle,
  ContainerSuscripcion,
  ContainerTextoSuscripcion,
  ContainerInputSuscripcion,
  TextoSuscripcion,
  TituloSuscripcion,
  InputStyle,
} from "./styles/Footer.js";
import Divider from "@mui/material/Divider";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import {
  FaFacebookF,
  FaDiscord,
  FaRedditAlien,
  FaTwitch,
  FaFacebookMessenger,
} from "react-icons/fa";
import { PiDiscordLogoFill } from "react-icons/pi";
import TextField from "@mui/material/TextField";

export const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Contacto>
          {/* Twitter */}
          <a
            href="https://x.com/genshinimpactes"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <IoLogoTwitter />
            </IconStyle>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@genshinimpact_latam"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <IoLogoTiktok />
            </IconStyle>
          </a>

          {/* Youtube */}
          <a
            href="https://www.youtube.com/@GenshinImpact"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <IoLogoYoutube />
            </IconStyle>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/genshinimpact.es/"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <FaFacebookF />
            </IconStyle>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/genshinimpact/"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <IoLogoInstagram />
            </IconStyle>
          </a>

          {/* HoyoLab */}
          <a
            href="https://www.hoyolab.com/circles/2/27/official?page_type=27&page_sort=events&lang=es-es&utm_source=component&utm_id=2"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <PiDiscordLogoFill />
            </IconStyle>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/invite/genshinimpact"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <FaDiscord />
            </IconStyle>
          </a>

          {/* Reddit */}
          <a
            href="https://www.reddit.com/r/Genshin_Impact/"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <FaRedditAlien />
            </IconStyle>
          </a>

          {/* Twitch */}
          <a
            href="https://www.twitch.tv/genshinimpactofficial"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <FaTwitch />
            </IconStyle>
          </a>

          {/* Messenger */}
          <a
            href="https://www.facebook.com/genshinimpact.es/posts/pfbid0zYX8gGCuCsUCpPdR7kvrobUEyzsA5amq8V5abdmRBKP5pqkeaoMJKrg7tLoYdAX3l"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <FaFacebookMessenger />
            </IconStyle>
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=13109207335&text=Hola,%20Paimon"
            target="_blank"
            rel="noreferrer"
          >
            <IconStyle>
              <IoLogoWhatsapp />
            </IconStyle>
          </a>
        </Contacto>
        <Divider sx={DividerStyle}></Divider>

        <ContainerSuscripcion>
          <ContainerTextoSuscripcion>
            <TituloSuscripcion>
              Suscríbete a las últimas noticias
            </TituloSuscripcion>
            <TextoSuscripcion>
              Suscríbete a las noticias oficiales de Paimon sobre Genshin Impact
              y sé de los primeros en recibir las últimas noticias sobre el
              juego y la información sobre los personajes y las recompensas de
              los eventos por tiempo limitado.
            </TextoSuscripcion>
          </ContainerTextoSuscripcion>
          <ContainerInputSuscripcion>
            <TextField
              id="outlined-helperText"
              label="Correo electrónico"
              sx={InputStyle}
            />
          </ContainerInputSuscripcion>
        </ContainerSuscripcion>
      </ContainerFooter>
    </>
  );
};
