import { addNewProduct } from "@/app/lib/addNewProduct";

export default async function handler(req, res) {
  addNewProduct(req.body.title, req.body.description, req.body.price);

  res.status(200).json({message: "Success"});
}
