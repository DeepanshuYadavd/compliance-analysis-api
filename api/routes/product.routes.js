import express from "express";
import { upload } from "../middlewares/multer.js";
import { createProduct } from "../controllers/product.controller.js";
import { isUser, protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protect,isUser, upload.array("images", 5), createProduct);

export default router;
