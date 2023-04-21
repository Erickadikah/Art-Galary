import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();    
    } catch (error) {
        console.log(error);
    }
    if(!users){
        return res.status(404).json({message: "No users found"});
    }
    res.status(200).json({ users });

};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        return console.log(error);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exists Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password); 

    const user = new User({
        name,
        email,
        password: hashedPassword,
        posts: [],
    });
    try {
       await user.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({ user });
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body)

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        return console.log(error);
    }
    if (!existingUser) {
        return res
        .status(404)
        .json({ message: "Couldnt Find User By this Email" });
    }
    const isValidPassword = bcrypt.compareSync(password, existingUser.password);
    if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid Credentials" });
}


}
