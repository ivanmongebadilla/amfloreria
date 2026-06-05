import { NextResponse } from "next/server";
import { updateProductById, deleteProductById } from "@/src/lib/products";

export async function PUT( request: Request, { params }: { params: Promise<{ id: string }> }) {
  const body = await request.json();

  const updateProduct = await updateProductById({
    id: (await params).id,
    ...body,
  });

  return NextResponse.json(updateProduct);
}

export async function DELETE(request: Request, {params}: { params: Promise<{id: string}>}){
  const { id } = await params;

  console.log(id)
  const deleteProduct = await deleteProductById(id)

  return NextResponse.json({success: true})
}