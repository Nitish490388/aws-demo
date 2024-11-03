"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "./.env"
});
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8001;
app.use(express_1.default.json({ limit: "25mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello from Express on AWS!');
});
app.post('/', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.status(200).json(sum);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
