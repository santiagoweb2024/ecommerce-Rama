import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());// midleware para tratar json

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});