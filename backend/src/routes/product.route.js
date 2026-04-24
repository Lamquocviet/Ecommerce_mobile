import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllProducts } from "../controllers/admin.controller.js";
import { getProductById } from "../controllers/product.controller.js";

const router = Router();

// Public routes 
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Protected routes - cần đăng nhập
router.post("/", protectRoute, (req, res) => res.status(403).json({ message: "Forbidden" }));
router.put("/:id", protectRoute, (req, res) => res.status(403).json({ message: "Forbidden" }));
router.delete("/:id", protectRoute, (req, res) => res.status(403).json({ message: "Forbidden" }));

export default router;
