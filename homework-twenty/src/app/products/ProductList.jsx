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
      <div>
        {products.map((product) => (
          <div
            key={product.id}>
            <div>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={250}
                height={250} />
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>Left in stock: {product.stock}</p>
            <button
              onClick={() => productDetailsBtn(product.id)}>
              See details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;