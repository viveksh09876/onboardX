
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { seedUsers } from "./utils/seed";
import authRoutes from './routes/authRoutes' 

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

app.get('/health', (req, res) => {
    res.send({ "status": "OK" })
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
