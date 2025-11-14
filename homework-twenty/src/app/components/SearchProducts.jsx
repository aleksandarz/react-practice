"use client"

import { useState } from "react";
import { searchProduct } from "../lib/searchProducts";

const SearchProducts = () => {
  const [searchedProduct, setSearchedProduct] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log(searchedProduct);

    const data = await searchProduct(searchedProduct);
    setResults(data);
    console.log(data);
  }

  return (
    <>
      <form action="">

        <input
          type="text"
          placeholder="Search products"
          onChange={ (e) => setSearchedProduct(e.target.value) } />
        <button
          type="button"
          onClick={ () => handleSearch() }>Search
        </button>

      </form>
    </>
  );
}

export default SearchProducts;