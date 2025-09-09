import { useState } from "react";

function Products(props) {

  const [products, setProducts] = useState({
    "IPhone 16": 1100,
    "IPhone 16 pro": 1300,
    "IPhone 17 pro": 1500,
    "IPhone 17 pro max": 1700,
  });

  const calculatePriceWithTax = (price, tax) => {
    return (price * (tax / 100)) + price;
  }

  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  const addNewProduct = (productName, productPrice) => {
    const name = String(productName || "").trim();
    const price = Number(productPrice);

    if (!name || !Number.isFinite(price)) {
      console.log("Product name and price are required");
      return;
    }

    let newProduct = { [productName]: parseInt(productPrice) } // moze i ovako -> products[productName] = productPrice;
    setProducts(currentProducts => ({
      ...currentProducts,
      ...newProduct
    }));
    setNewProductName("");
    setNewProductPrice("");
  }

  const [searchedProduct, setSearchedProduct] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const productExistence = (products, searchedProduct) => {
    // Drugi nacin
    // return Object.entries(products).some(([name, productPrice]) =>
    //   searchedProduct.trim().toLowerCase() === name.toLowerCase()
    // );

    const productNames = Object.keys(products);

    for (let name of productNames) {
      if (searchedProduct.trim().toLowerCase() === name.toLowerCase()) {
        setInfoMessage("Product exists");
        return true;
      }
    }

    setInfoMessage("Product does not exist");
    return false;

  }

  return (
    <>
      <div>
        <div className="flex gap-5 flex-wrap">
          {Object.entries(products).map(([name, price]) => (
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold">{ name }</h3>
              <p>Price with tax: { calculatePriceWithTax(price, props.tax) }</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-3 mb-3">
          <h1 className="text-2xl font-bold">Search products</h1>
          <p>{ infoMessage }</p>
          <input className="border border-gray-400 rounded h-8 w-60 pl-1"
                 type="text" name="" id="" placeholder="Search products" onChange={ (e) => {
            setSearchedProduct(e.target.value);
            console.log(e.target.value);
          }}/>
          <button className="bg-cyan-400 hover:bg-cyan-700 transition duration-300 ease-in-out text-white rounded h-8 w-40" onClick={ () => {
            console.log(searchedProduct);
            console.log(productExistence(products, searchedProduct)); } }>Search products</button>
        </div>

        <div className="flex flex-col gap-3 mt-3 mb-3">
          <h1 className="text-2xl font-bold">Add new product</h1>
          <input className="border border-gray-400 rounded h-8 w-60 pl-1"
                 type="text" name="" id="" value={ newProductName } placeholder="Enter product name" onChange={ (e) =>
            setNewProductName(e.target.value)} />
          <input className="border border-gray-400 rounded h-8 w-60 pl-1"
                 type="number" name="" id="" value={ newProductPrice } placeholder="Enter product price" onChange={ (e) =>
            setNewProductPrice(e.target.value)} />
          <button className="bg-cyan-400 hover:bg-cyan-700 transition duration-300 ease-in-out text-white rounded h-8 w-40"
                  onClick={ () => addNewProduct(newProductName, newProductPrice) }>Add new product</button>
        </div>

        <button className="bg-cyan-400 hover:bg-cyan-700 transition duration-300 ease-in-out text-white rounded h-8 w-40"
                onClick={() => setProducts({}) }>Delete products</button>
      </div>
    </>
  );
}

export default Products;