
export const fetchProducts = async () => {
  const response = await fetch(`${process.env.PRODUCT_API_URL}?limit=9&skip=100`, {
    next: {
      revalidate: 3600,
    }
  });
  const data = await response.json();
  return data.products;
};

