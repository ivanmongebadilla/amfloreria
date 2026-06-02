// import { use } from "react";
import { getProductsByCategory } from "@/src/lib/products";
import CategoryPage from "@/src/features/category/CategoryPage"

export default async function Category({ params,}: { params: Promise<{ category: string }>;}) {
  // const { category } = use(params);
  const { category } = await params;

  const filteredProducts = await getProductsByCategory(category);

  console.log(filteredProducts)

  return ( 
    <CategoryPage products={filteredProducts} category={category} />
  );
}
