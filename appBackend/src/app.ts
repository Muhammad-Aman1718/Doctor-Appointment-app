import express, { Express, Request, Response, NextFunction } from "express";

// Set this according to yourself
// import { errorMiddleware } from "./middlewares/error.js";

import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app: Express = express();
const PORT = Number(process.env.PORT) || 3000;
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript!");
});

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   errorMiddleware(err, req, res, next);
// });
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:PORT");
});
