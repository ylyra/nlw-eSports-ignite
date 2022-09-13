import * as dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/ping", (_, res) => {
  res.json({
    status: "ok",
    message: "pong",
  });
});

app.get("/games", async (_, res) => {
  const response = await axios.get("https://api.twitch.tv/helix/games", {
    headers: {
      Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
    },
  });
  res.json({
    status: "ok",
    message: "pong",
  });
});

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
