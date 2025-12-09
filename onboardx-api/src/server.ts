
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { seedUsers } from "./utils/seed";
import authRoutes from './routes/authRoutes' 
import { authMiddleware } from "./middleware/authMiddleware";

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.get('/health', (req, res) => {
    res.send({ "status": "OK" })
});

app.get('/protected', authMiddleware(), (req, res) => {
    res.json({ message: "authenticated!", user: req.user });
});

app.get('/analyst-only', authMiddleware(['ANALYST']), (req, res) => {
    res.json({ message: "Analyst allowed", user: req.user });
});

async function startServer() {
    try {
        await mongoose.connect(MONGO_URI).then(async() => {
            console.log("Connected to mongodb");
            await seedUsers();
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        });

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

startServer();
