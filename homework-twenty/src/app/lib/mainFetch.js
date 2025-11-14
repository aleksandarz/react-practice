
export const mainFetch = async (params) => {
  const response = await fetch(`${process.env.PRODUCT_API_URL}/${params}`);
  return await response.json();
}