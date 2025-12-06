
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.send({ "status": "OK" })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
