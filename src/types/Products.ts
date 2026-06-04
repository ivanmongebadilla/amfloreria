export default interface Product {
  id: number;
  slug: string;
  title: string;
  category: string;
  collections: string[];
  image: string;
  flowers: string[];
  description: string;
  price: number;
  featured: boolean;
  active: boolean;
}