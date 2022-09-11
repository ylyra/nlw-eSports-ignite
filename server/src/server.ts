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

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
