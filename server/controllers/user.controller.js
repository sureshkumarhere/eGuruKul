import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({success:false , message:"All fields are required"});
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message:"User registered successfully"
        })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to register" });
    }


}



export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({success:false , message:"All fields are required"});
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        // console.log(isPasswordCorrect);
        if (!isPasswordCorrect) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }


        generateToken(res, user, `Welcome back ${user.name}`);
        // we have to pass the json web token to the client so that the client can store it and send it back with every request
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to login" });
    }
}


export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
                    message:"Logged out successfully.",
                    success:true
        })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Failed to logout" });
    }
}