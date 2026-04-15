import { requireAuth } from "@clerk/express";
import { User } from "../models/user.model.js";
import { ENV } from "../config/env.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      console.log("auth:", req.auth);

      if (!req.auth || !req.auth.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const clerkId = req.auth.userId;

      let user = await User.findOne({ clerkId });

      if (!user) {
        user = await User.create({
          clerkId,
          email: req.auth.sessionClaims?.email || "",
        });
      }

      req.user = user;

      next();
    } catch (error) {
      console.error("🔥 Middleware error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];
export const adminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized - user not found" });
  }

  if (req.user.email !== ENV.ADMIN_EMAIL) {
    return res.status(403).json({ message: "Forbidden - admin access only" });
  }

  next();
};
