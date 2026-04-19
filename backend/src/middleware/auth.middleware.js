import { clerkClient, requireAuth } from "@clerk/express";
import { User } from "../models/user.model.js";
import { ENV } from "../config/env.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const auth = req.auth();
      console.log("auth:", auth);

      if (!auth || !auth.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const clerkId = auth.userId;
      let email = auth.sessionClaims?.email;

      if (!email) {
        try {
          const clerkUser = await clerkClient.users.getUser(clerkId);
          email =
            clerkUser.primaryEmailAddress?.emailAddress ||
            clerkUser.emailAddresses?.[0]?.emailAddress ||
            undefined;
        } catch (fetchError) {
          console.warn("Unable to fetch Clerk user email:", fetchError?.message || fetchError);
        }
      }

      let user = await User.findOne({ clerkId });

      if (!user) {
        const userData = { clerkId };
        if (typeof email === "string" && email.trim()) {
          userData.email = email.trim();
        }

        user = await User.create(userData);
      } else if (!user.email && typeof email === "string" && email.trim()) {
        user.email = email.trim();
        await user.save();
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
