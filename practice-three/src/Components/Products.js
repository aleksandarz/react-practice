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

    return (
        <>
            <div>
                {Object.entries(products).map(([name, price]) => (
                    <p key={ name }>Product: { name } - Price: { price } - Price with tax: { calculatePriceWithTax(price, props.tax) }</p>
                ))}

                <div>
                    <input type="text" name="" id="" value={newProductName} placeholder="Enter product name" onChange={ (e) =>
                    setNewProductName(e.target.value)} />
                    <input type="number" name="" id="" value={newProductPrice} placeholder="Enter product price" onChange={ (e) =>
                    setNewProductPrice(e.target.value)} />
                    <button onClick={ () => addNewProduct(newProductName, newProductPrice) }>Add new product</button>
                </div>

                <button onClick={() => setProducts({}) }>Delete products</button>
            </div>
        </>
    );
}

export default Products;