import * as dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";

import { AdsRoutes } from "./routes/ads.routes";
import { GamesRoutes } from "./routes/games.routes";
import errorHandler from "./utils/errors/handler";

const app = express();
const port = process.env.PORT || 4444;

app.use(express.json());
app.use(cors());

app.get("/ping", (_, res) => {
  res.json({
    status: "ok",
    message: "pong",
  });
});

app.use("/games", GamesRoutes);
app.use("/ads", AdsRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
