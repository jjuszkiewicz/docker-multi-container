import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use((req, resp, next) => {
  console.log("request", req.path)
  next();
});
app.get("/api/random-numbers", async (req, res) => {
  const numbers = [];
  for (let i = 0; i < 10; ++i) {
    numbers.push(Math.round(Math.random() * 10000000));
  }
  res.json({ numbers });
});

export default app;
