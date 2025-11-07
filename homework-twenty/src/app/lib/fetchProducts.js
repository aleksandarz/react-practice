
export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const data = await response.json();
  return data.products;
};

