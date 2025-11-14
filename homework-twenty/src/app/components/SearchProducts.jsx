"use client"

import { useState, useEffect } from "react";
import { searchProduct } from "../lib/searchProducts";
import Image from "next/image";
import { router } from "next/client";

const SearchProducts = () => {
  const [searchedProduct, setSearchedProduct] = useState("");
  const [timer, setTimer] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {

    if (searchedProduct.trim() === "") {
      setResults([]);
      return;
    }

    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(async () => {
      const data = await searchProduct(searchedProduct);
      setResults(data);
      console.log(data);
    }, 2000);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);

  }, [searchedProduct]);

  const productDetailsBtn = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <form action="">

        <input
          type="text"
          placeholder="Search products"
          onChange={ (e) => setSearchedProduct(e.target.value) } />

      </form>

      <div>
        { results && results.map((product) => (
          <div
            key={product.id}>
            <div>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={250}
                height={250}/>
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

export default SearchProducts;