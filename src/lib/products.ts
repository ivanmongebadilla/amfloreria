import { supabase } from "./supabase";
import Product from "../types/Products";
import CreateProductInput from "../types/CreateProductInput";
import { generateSlug } from "../utils/generateSlug";

export async function getAllProducts(){
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("active", true);

    if (error) throw error;

    return data
}

export async function getProductsByCategory(category: String) {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq('category', category)

    if (error) throw error;

    return data
}

export async function getProductById(id: string){
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function updateProductById(product: Product) {
    const slug = generateSlug(product.title)

    const { data, error } = await supabase
        .from('products')
        .update({
            slug: slug,
            title: product.title,
            description: product.description,
            price: product.price,
            active: product.active
        })
        .eq('id', product.id)
        .select()
        .single()

    if (error) {
        throw error;
    }

    return {success: true, data: data}
}


export async function uploadProductImage(file: File, fileName: string, category: string) {
    const extension =
        file.name.split(".").pop();

    fileName = `${fileName}.${extension}`;

    const { error } =
        await supabase.storage
        .from("images")
        .upload(`${category}/${fileName}`, file);

    if (error) {
        throw error;
    }

    const { data } =
        supabase.storage
        .from("images")
        .getPublicUrl(`${category}/${fileName}`);

    return data.publicUrl;
}

export async function createNewProduct(product: CreateProductInput){
    const { data, error } = await supabase
        .from("products")
        .insert(product)
        .select()
        .single()

    if (error) {
        throw error;
    }

    return {success: true, data: data}
}

export async function deleteProductById(id: string) {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

    if (error) {
        throw error;
    }

    return {success: true}
}