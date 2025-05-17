import { useState } from "react";

type Product = {
  name: string;
  price: number;
};

const products: { [key: string]: number } = {};

function Products(props: { tax: string }) {
  const taxValue = parseFloat(props.tax);

  const [newProduct, setNewProduct] = useState<Product>();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct(name: string, price: number): { [key: string]: number } 
  {
    setNewProduct({ name, price });
    products[name] = price;
    return products;
  }

  const handleAddProduct = () => {
    const priceNumber = parseFloat(price);
    if (!name || isNaN(priceNumber)) {
      alert("Unesi ispravno ime i cenu!");
      return;
    }
    addProduct(name, priceNumber);
    setName("");
    setPrice("");
  };

  const priceWithTax = (price: number, tax: number) => {
    if (isNaN(taxValue)) 
    {
      return price;
    }
    return price + (price * tax / 100);
  };

  return (
    <div>
      <h1>Products</h1>
      <input
        className="new-product"
        type="text"
        placeholder="Enter the name of the product"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="new-product"
        type="text"
        placeholder="Enter the price of the product"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="buttons" onClick={handleAddProduct}>
        Add product
      </button>

      {Object.entries(products).map(([name, value], index) => (
        <p className="products" key={index}>
          {name} -- Price: {value}€ -- Price with tax: {priceWithTax(value, taxValue)}€
        </p>
      ))}
    </div>
  );
}

export default Products;
