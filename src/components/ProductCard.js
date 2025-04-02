import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <Image src={product.image} alt={product.title} width={200} height={200} className="mx-auto"/>
      <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <Link href={`/product/${product.id}`}>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </button>
      </Link>
    </div>
  );
}
