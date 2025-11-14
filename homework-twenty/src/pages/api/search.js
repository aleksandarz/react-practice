import { searchProduct } from "@/app/lib/searchProducts";

export default async function handler(req, res) {
  if (!req.query.search) {
    return res.status(400).json({message: "Invalid search query"});
  }

  const data = await searchProduct(req.query.search);

  res.status(200).json(data);
}
