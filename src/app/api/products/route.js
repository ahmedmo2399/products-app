import { NextResponse } from "next/server";

const API_URL = "https://fakestoreapi.com/products";

export async function GET(req, { params }) {
  try {
    const res = await fetch(`${API_URL}/${params.id}`);
    if (!res.ok) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    const product = await res.json();
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const updatedProduct = await req.json();
    const res = await fetch(`${API_URL}/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    if (!res.ok) return NextResponse.json({ error: "Failed to update product" }, { status: 400 });

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  try {
    const res = await fetch(`${API_URL}/${params.id}`, { method: "DELETE" });
    if (!res.ok) return NextResponse.json({ error: "Failed to delete product" }, { status: 400 });

    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
