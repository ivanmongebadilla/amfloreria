import { NextResponse } from "next/server";
import { uploadProductImage } from "@/src/lib/products";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }){
    const formData = await request.formData();

    const title = formData.get('title') as string
    const image = formData.get('imageFile') as File
    const category = formData.get('category') as string

    console.log(title)
    console.log(image)

    const imageUrl = await uploadProductImage(image, category)

    console.log(`ImageUrl: ${imageUrl}`)

    return NextResponse.json({success: true, imageUrl: imageUrl})
}