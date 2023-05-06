import Post from "../models/Post.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export const getAllPosts = async (req, res, next) => {
    let posts;
    try {
        posts = await Post.find().populate("user");
    } catch (error) {
        console.log(error);
    }
    if (!posts) {
        return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json({ posts });
}

export const addPost = async (req, res, next) => {
    const { title, description, image, price, user } = req.body;

    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (error) {
        return console.log(error);
    }
    if (!existingUser) {
        return res
        .status(404)
        .json({ message: "Couldnt Find User By this ID" });
    }
    const post = new Post({
        price,
        user,
        title,
        description,
        image
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await post.save({session});
        existingUser.posts.push(post);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err});

    }
    return res.status(200).json({ post });
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
    return res.status(200).json({ post });
}

export const updatePost = async (req, res, next) => {
    const { price, title, description } = req.body;
    const postId = req.params.id;
    let post;
    try {
        post = await Post.findByIdAndUpdate(postId, {
        price,
        title,
        description,
    });
    } catch (err) {
        console.log(err);
    }
    if (!post) {
        return res.status(500).json({ message: "Unable to Update the post" });
    }
    return res.status(200).json({post})
};


//find post by id
export const getById = async (req, res, next) => {
    const id = req.params.id;
    let post;
    try {
        post = await Post.findById(id);
    }
    catch (err) {
        console.log(err);
    }
    if (!post) {
        return res.status(500).json({ message: "Unable to find the post" });
    }
    return res.status(200).json({ post });
};

//deleting post
export const deletePost = async (req, res, next) => {
    const id = req.params.id;
    let post;
    try {
        post = await Post.findByIdAndDelete(id).populate("user");
        await post.user.posts.pull(post);
        await post.user.save();
    }
    catch (err) {
        console.log(err);
    }
    if (!post) {
        return res.status(500).json({ message: "Unable to delete" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
}

export const getByUserId = async (req, res, next) => {
    const userId = req.params.id;
    let userPosts;
    try {
        userPosts = await User.findById(userId).populate("posts")
    }
    catch (err) {
        return console.log(err)
    }
    if(!userPosts) {
        return res.status(404).json({message: "No posts Found"})
    }
    return res.status(200).json({user: userPosts})
}