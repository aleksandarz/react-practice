"use client"

import { useState } from "react";
import { addNewProduct } from "@/app/lib/addNewProduct";

const addProduct = () => {

  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(null);

  const createProduct = (e) => {
    e.preventDefault();

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: productTitle,
        description: productDescription,
        price: productPrice,
      })
    });

    addNewProduct(productTitle, productDescription, productPrice);

    setProductTitle("");
    setProductDescription("");
    setProductPrice(null);
  }

  return (
    <>
      <form action="" onSubmit={createProduct}>
        <input
          type="text"
          placeholder="Product name"
          onChange={(e) => setProductTitle(e.target.value)} />
        <input
          type="text"
          placeholder="Product description"
          onChange={(e) => setProductDescription(e.target.value)} />
        <input
          type="text"
          placeholder="Product price"
          onChange={(e) => setProductPrice(e.target.value)} />
        <button
          type="submit">Add product</button>
      </form>
    </>
  );
}

export default addProduct;