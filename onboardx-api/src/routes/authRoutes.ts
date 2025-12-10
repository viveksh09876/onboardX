import express from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../models/User'
import { generateToken } from '../utils/jwt';

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req?.body || {};
        
        //validate request body
        if (!email || !password) {
            return res.status(401).json({
                message: "email & password is required",
            });
        }

        //find user in DB
        const user  = await User.findOne({ email }).exec();

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        //compare password
        const isMatch = await bcrypt.compare(password, user?.password || "");

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }
        
        //build token payload & generate jwt
        const payload = {
            id: user?._id.toString() || "",
            email: user.email,
            role: user?.role || "USER",
            name: user.name
        }

        const token = generateToken(payload);

        return res.json({
            token,
            user: payload
        });

    } catch(err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Something went wrong!" });
    }
});

export default router;