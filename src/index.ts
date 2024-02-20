// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

let count = 0

let loop = setInterval(() => {
  console.log('tick', count++)

  if (count === 5) {
    clearInterval(loop)
    console.log('stopped looping')
  }
}, 5000)