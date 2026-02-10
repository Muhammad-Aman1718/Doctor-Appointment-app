"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Set this according to yourself
// import { errorMiddleware } from "./middlewares/error.js";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: "../.env",
});
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, helmet_1.default)());
app.get("/", (req, res) => {
    res.send("Hello from TypeScript!");
});
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   errorMiddleware(err, req, res, next);
// });
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:PORT");
});
