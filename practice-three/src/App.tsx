import React from 'react';
import './App.css';
import Products from './components/Products';
import { useState } from "react";

function App() {

  const [tax, setTax] = useState<string>("");

  function deleteProducts(): void 
  {
    const products = document.querySelectorAll(".products");
    products.forEach((product) => {
      product.remove();
    });
  }

  return (
    <>
      <div className="app">
        <Products tax={tax}/>
        <input className="new-product" type="text" name="tax" id="tax" placeholder="Enter the tax" 
            value={tax} onInput={(e) => setTax(e.currentTarget.value)}/>
        <button className="buttons" onClick={deleteProducts}>Delete products</button>
      </div>
    </> 
  );
}

export default App;
