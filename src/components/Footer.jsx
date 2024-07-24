import React from "react";
import {
  ContainerFooter,
  Contacto,
  DividerStyle,
  IconsStyle,
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
            <IoLogoTwitter style={IconsStyle} />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@genshinimpact_latam"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoTiktok style={IconsStyle} />
          </a>

          {/* Youtube */}
          <a
            href="https://www.youtube.com/@GenshinImpact"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoYoutube style={IconsStyle} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/genshinimpact.es/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF style={IconsStyle} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/genshinimpact/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram style={IconsStyle} />
          </a>

          {/* HoyoLab */}
          <a
            href="https://www.hoyolab.com/circles/2/27/official?page_type=27&page_sort=events&lang=es-es&utm_source=component&utm_id=2"
            target="_blank"
            rel="noreferrer"
          >
            <PiDiscordLogoFill style={IconsStyle} />
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/invite/genshinimpact"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord style={IconsStyle} />
          </a>

          {/* Reddit */}
          <a
            href="https://www.reddit.com/r/Genshin_Impact/"
            target="_blank"
            rel="noreferrer"
          >
            <FaRedditAlien style={IconsStyle} />
          </a>

          {/* Twitch */}
          <a
            href="https://www.twitch.tv/genshinimpactofficial"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitch style={IconsStyle} />
          </a>

          {/* Messenger */}
          <a
            href="https://www.facebook.com/genshinimpact.es/posts/pfbid0zYX8gGCuCsUCpPdR7kvrobUEyzsA5amq8V5abdmRBKP5pqkeaoMJKrg7tLoYdAX3l"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookMessenger style={IconsStyle} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=13109207335&text=Hola,%20Paimon"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp style={IconsStyle} />
          </a>
        </Contacto>
        <Divider sx={DividerStyle}></Divider>
      </ContainerFooter>
    </>
  );
};
