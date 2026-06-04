export default interface CreateProductInput {
  title: string;
  category: string;
  slug: string;
  description: string;
  image: string;
  flowers: string[];
  price: number;
  active: boolean;
}