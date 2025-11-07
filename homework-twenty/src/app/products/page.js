import { fetchProducts } from "@/app/lib/fetchProducts";
import ProductList from "@/app/products/ProductList";

const AllProducts = async () => {
  const products = await fetchProducts();
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default AllProducts;
