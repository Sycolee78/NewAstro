import IconMail from "@/components/icons/IconMail.astro";
import IconGitHub from "@/components/icons/IconGitHub.astro";
import IconBrandX from "@/components/icons/IconBrandX.astro";
import IconLinkedin from "@/components/icons/IconLinkedin.astro";
import IconWhatsapp from "@/components/icons/IconWhatsapp.astro";
import IconFacebook from "@/components/icons/IconFacebook.astro";
import IconTelegram from "@/components/icons/IconTelegram.astro";
import IconPinterest from "@/components/icons/IconPinterest.astro";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/Sycolee78",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-buruvuru-a20b46246/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:emmanuelburuvuru@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
