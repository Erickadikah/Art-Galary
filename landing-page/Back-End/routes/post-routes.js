import express from "express";
import { getAllPosts } from "../controllers/post-controller.js";
import { posts } from "../controllers/post-controller.js";

const postRouter = express.Router();


postRouter.get("/api/posts", getAllPosts);
postRouter.post("/api/post", posts);

export default postRouter;