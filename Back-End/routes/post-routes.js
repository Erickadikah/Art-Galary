import express from "express";
import { addPost, getAllPosts, getByUserId,uploadFile } from "../controllers/post-controller.js";
import { posts } from "../controllers/post-controller.js";
import { updatePost } from "../controllers/post-controller.js";
import { getById } from "../controllers/post-controller.js";
import { deletePost } from "../controllers/post-controller.js";
import { uploadProfilePicture } from "../controllers/user-controller.js";

const postRouter = express.Router();


postRouter.get("/api/posts", getAllPosts);
postRouter.post("/api/post/add", addPost);
postRouter.get("/post", posts);
postRouter.put("/api/post/update/:id", updatePost);
postRouter.get("/api/post/:id", getById)
postRouter.delete("/api/post/:id" , deletePost);
postRouter.get("/api/post/user/:id", getByUserId);
// postRouter.post("/api/post/user/avatar", uploadFile);
postRouter.post("/uploads", uploadProfilePicture)

export default postRouter;