import condolencias from "../../public/images/condolencias1.jpg"
import ramo from "../../public/images/ramos.jpg"
import premium from "../../public/images/luxury.jpg"
import flowerbox from "../../public/images/flowerbox.jpg"

export const categories = [
  {
    title: "Ramos Express",
    description: "Ramos elegantes preparados para entrega inmediata.",
    image: ramo.src,
    href: "/ramo-express",
  },
  {
    title: "Bouquets Premium",
    description: "Diseños exclusivos elaborados con flores selectas.",
    image: premium.src,
    href: "/bouquet-premium",
  },
  // {
  //   title: "Bouquet Personalizado",
  //   description: "Personaliza cada detalle para una experiencia floral exclusiva.",
  //   image: "https://scontent-phx1-1.cdninstagram.com/v/t51.82787-15/629833946_18362187808207800_5487254742400285530_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MjU3NTE1NDU5MjU0OTMxMzk2MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=cry_sULan6wQ7kNvwFbzLFA&_nc_oc=AdpVZ77CHIqaULY_xrQihXMVeWTKKAUyKqq3Up3l8YTkjKuaIKy0UGv1ru3BMSWm0N-YHb24OtnLVcNR-nKqxXST&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-phx1-1.cdninstagram.com&_nc_gid=6hEjI8b9PKp3Uj1J5NNG8A&_nc_ss=7a22e&oh=00_Af8hz8d1clqe-a7xLmnN-sCURVeqOYsMT8M3d5kXNDpyhg&oe=6A237CBA",
  //   href: "/shop/bouquet-personalizado",
  // },
  {
    title: "Flowerbox Floral",
    description: "Diseños florales exclusivos presentados en una elegante flowerbox.",
    image: flowerbox.src,
    href: "/flowerbox",
  },
  {
    title: "Condolencias",
    description: "Homenajes florales cuidadosamente elaborados para honrar la memoria de un ser querido.",
    image: condolencias.src,
    href: "/condolencias",
  }
];
