import express from "express";
import { getAllUser, login, signup, getUserById, logout,} from "../controllers/user-controller.js";
// import {Profile} from "../"

const router = express.Router();


router.get("/api/user", getAllUser);
router.post("/api/signup", signup);
router.post("/api/user/login", login);
router.get("/api/user/:id", getUserById);
router.get("/api/user/logout", logout);
// router.post("/api/user/uploads", uploads)
// router.get("/api/user/:id/profilePicture", upload.single("profilePicture"), uploadProfilePicture);

export default router;