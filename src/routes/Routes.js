import express from "express";
import movie from "../controllers/MovieController.js";

const app = express();

app.use("/movie",movie);

export default app;