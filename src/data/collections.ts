import flowerbox from "../../public/images/flowerbox/flowerbox_primavera.jpeg";
import ramo from "../../public/images/ramos/encanto.jpeg"
import bouquet_premium from "../../public/images/bouquet_premium/bouquet_aurora.jpeg"
import bouquet_personalizado from "../../public/images/bouquet_personalizado/bouquet_personalizado1.jpeg"

export const collections = [
  {
    title: "Ramos Express",
    description: "Ramos elegantes preparados para entrega inmediata.",
    image: ramo.src,
    href: "/shop/collections/romance",
  },
  {
    title: "Bouquets Premium",
    description: "Diseños exclusivos elaborados con flores selectas.",
    image: bouquet_premium.src,
    href: "/shop/collections/luxury",
  },
  {
    title: "Bouquet Personalizado",
    description: "Personaliza cada detalle para una experiencia floral exclusiva.",
    image: bouquet_personalizado.src,
    href: "/shop/collections/eventos",
  },
  {
    title: "Flowerbox floral",
    description: "Diseños florales exclusivos presentados en una elegante flowerbox.",
    image: flowerbox.src,
    href: "/shop/collections/seasonal",
  },
  {
    title: "Arreglos de Condolencia",
    description: "Homenajes florales cuidadosamente elaborados para honrar la memoria de un ser querido.",
    image: bouquet_personalizado.src,
    href: "/shop/collections/condolencia",
  }
];
