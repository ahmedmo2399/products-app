"use client"

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setPrice(data.price);
          setImage(data.image);
        });
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, image }),
    });
    router.push(`/product/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Edit Product</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input className="border p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
}
