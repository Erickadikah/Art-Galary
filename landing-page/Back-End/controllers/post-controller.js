import Post from "../models/Post.js";

export const getAllPosts = async (req, res, next) => {
    let posts;
    try {
        posts = await Post.find();
    } catch (error) {
        console.log(error);
    }
    if (!posts) {
        return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json({ posts });
}

export const posts = async (req, res, next) => {
    const { title, description, image, price, user } = req.body;

    const post = new Post({
        price,
        user,
        title,
        description,
        image
    });
    try {
        await post.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({ post });
}