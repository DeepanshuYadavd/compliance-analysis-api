import { Product } from "../models/products.schema.js";

export const createProduct = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.files);
    return res.status(200).json({
      message: "khush reh",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
