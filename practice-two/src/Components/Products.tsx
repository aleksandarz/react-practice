
const products: { [key: string]: number } = {
    "IPhone 16 Pro": 1200, 
    "IPhone 16 Pro Max": 1400, 
    "IPhone 16": 1100, 
    "IPhone 16 Plus": 1300,
};

function Products(props: { tax: string }) {
    const priceWithTax = (price: number, tax: string) => {
        const taxNumber = parseFloat(tax);
        return price + (price * taxNumber / 100);
    }
    return (
        <>
            <div>
                <h1>Products</h1>
                {Object.entries(products).map(([key, value], index) => (
                    <div key={index}>
                        <h2>{key}</h2>
                        <p>Product: {key}, Price: {value}, Price with tax: {priceWithTax(value, props.tax)}</p>
                    </div>
                ))}
            </div>
        </> 
    );
}

export default Products;