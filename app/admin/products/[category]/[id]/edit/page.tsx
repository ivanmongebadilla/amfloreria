import { getProductById } from "@/src/lib/products";
import EditProductPage from "@/src/features/category/EditProductPage";


interface EditProductPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export default async function EditProduct({params}: EditProductPageProps){
    const { id, category } = await params

    const product = await getProductById(id);

    //TODO move all the page render to another component
    return(
       <EditProductPage product={product} category={category}/>
    )
}