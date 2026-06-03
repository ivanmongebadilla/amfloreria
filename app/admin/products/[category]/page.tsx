import { getProductsByCategory } from "@/src/lib/products";
import AdminCategoryPage from "@/src/components/admin/AdminCategoryPage";

export default async function AdminCategory({params} : { params: Promise<{ category: string }>;}){
    const { category } = await params;

    const filteredProducts = await getProductsByCategory(category);

    return(
        <AdminCategoryPage products={filteredProducts} category={category} />
    )
}