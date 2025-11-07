"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductList = ({ products }) => {
  console.log(products);
  const router = useRouter();

  const productDetailsBtn = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5 m-5">
        {products.map((product) => (
          <div
            className="flex flex-col items-center w-2/7 bg-white shadow rounded p-3 min-h-[400px]"
            key={product.id}>
            <div className="w-[250px] h-[250px] overflow-hidden flex items-center justify-center">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={250}
                height={250}
                className="object-cover w-full h-full rounded"/>
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>Left in stock: {product.stock}</p>
            <button
              onClick={() => productDetailsBtn(product.id)}
              className="btn btn-primary w-3/4 mt-2">
              See details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;