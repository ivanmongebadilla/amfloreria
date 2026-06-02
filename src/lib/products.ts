import { supabase } from "./supabase";

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