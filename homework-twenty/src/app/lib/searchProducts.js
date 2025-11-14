
export const searchProduct = async (product) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/search?q=${product}`);
  const data = await response.json();
  return data.products;
}