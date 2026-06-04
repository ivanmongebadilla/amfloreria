import { NextResponse } from "next/server";
import { uploadProductImage, createNewProduct } from "@/src/lib/products";
import { generateSlug } from "@/src/utils/generateSlug";
import CreateProductInput from "@/src/types/CreateProductInput";

export async function POST(request: Request){
    const formData = await request.formData();

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const image = formData.get('imageFile') as File;
    const category = formData.get('category') as string;
    const flowers = JSON.parse(formData.get("flowers") as string);
    const price = Number(formData.get('price'));
    const active = formData.get("active") === "true";
    const slug = generateSlug(title);
    const fileName = slug

    const imageUrl = await uploadProductImage(image, fileName, category)

    const product: CreateProductInput = {
        title,
        description,
        slug,
        category,
        flowers,
        price,
        active,
        image: imageUrl,
    };

    const newProduct = await createNewProduct(product)

    return NextResponse.json({success: true, imageUrl: imageUrl})
}