"use client"; 
import { useEffect, useState } from "react";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Products App</title>
      </Head>

      <h1 className="text-2xl font-bold mb-4">📦 قائمة المنتجات</h1>

      <Link href="/product/new">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
          ➕ إضافة منتج جديد
        </button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
