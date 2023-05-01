import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller.js";

const router = express.Router();


router.get("/api/user", getAllUser);
router.post("/api/signup", signup);
router.post("/api/user/login", login);

export default router;