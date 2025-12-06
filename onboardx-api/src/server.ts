
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.send({ "status": "OK" })
});



async function startServer() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to mongodb");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

startServer();
