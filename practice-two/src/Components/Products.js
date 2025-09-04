
const calculateTax = (price, tax) => {
    return price + (price * (tax / 100));
}

function Products(props) {

    const products = {
        "IPhone 14 pro": 900,
        "IPhone 15 pro": 1050,
        "IPhone 16 pro": 1300
    };

    console.log(props)
    return (
        <>
            <div>
                {Object.entries(products).map(([productKey, productValue]) => (
                    <p key={productKey}>Product: {productKey}, Price with tax: {calculateTax(productValue, props.tax)} </p>
                ))}
            </div>
        </>
    );
}

export default Products;