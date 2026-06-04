import { NextResponse } from "next/server";
import { updateProductById } from "@/src/lib/products";

export async function PUT( request: Request, { params }: { params: Promise<{ id: string }> }) {
  const body = await request.json();

  const updateProduct = await updateProductById({
    id: (await params).id,
    ...body,
  });

  return NextResponse.json(updateProduct);
}