"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this product?")) {
      await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
      router.push("/");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p className="text-gray-600">${product.price}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete}>
        Delete Product
      </button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-4" onClick={() => router.push(`/product/edit/${id}`)}>
        Edit Product
      </button>
    </div>
  );
}
