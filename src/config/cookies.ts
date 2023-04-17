type CookiesText = {
  [key: string]: {
    title: string;
    description: string;
    knowMore: string;
    ctaLabel: string;
  };
};

export const cookiesTexts: CookiesText = {
  en: {
    title: "About our 🍪",
    description:
      "We use Cookies to facilitate navigation and provide a better web experience. ",
    knowMore: "Know more.",
    ctaLabel: "Accept",
  },
  es: {
    title: "Sobre nuestas 🍪",
    description:
      "Hacemos uso de Cookies para facilitar la navegación y poder ofrecer una mejor experiencia en de la web. ",
    knowMore: "Saber más.",
    ctaLabel: "Aceptar",
  },
};
