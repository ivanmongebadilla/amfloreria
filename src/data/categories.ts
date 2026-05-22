import ramo1 from "../../public/images/ramo1.jpg"
import events1 from "../../public/images/events1.png"
import arreglo1 from "../../public/images/arreglo1.jpg"
import condolencias1 from "../../public/images/condolencias1.jpg"

export const categories = [
  {
    title: "Ramos",
    description: "Bouquets elegantes para regalar momentos especiales.",
    image: ramo1.src,
    href: "/shop/ramos",
  },
  {
    title: "Arreglos Florales",
    description: "Diseños premium para decoración y celebraciones.",
    image: arreglo1.src,
    href: "/shop/arreglos-florales",
  },
  {
    title: "Condolencias",
    description: "Arreglos florales elegantes para acompañar momentos difíciles.",
    image:condolencias1.src,
    href: "/shop/condolencias",
  },
  {
    title: "Eventos",
    description: "Flores diseñadas para bodas y celebraciones memorables.",
    image:events1.src,
    href: "/shop/eventos",
  },
];
