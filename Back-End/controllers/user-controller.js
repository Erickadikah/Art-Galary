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
    console.log(req.body);

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
    return res.status(400).json({ message: "Invalid Credentials" });
    }
    return res.status(200).json({ message: "Login Succesfull", user: existingUser });
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        
    }
};

export const logout = async (req, res, nex) => {
    try {
        req.session.destroy();

        // seding a successful response
        res.status(200).json({message: 'Logout successfull'});
    } catch (error) {

    }
};
export const uploadProfilePicture = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // save the filename to the user document
    user.profilePicture = req.file.filename;
    await user.save();

    res.status(200).json({ message: "Profile picture uploaded" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
