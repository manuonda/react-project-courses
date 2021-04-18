require("dotenv").config();
import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors"
import config from "./config/config"

import { dbConnect } from "./config/database";

import videoRouter from "./route/"

const app: Express = express();
// seteo el puerto
app.set("port", config.PORT);

app.use(morgan("dev"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use()

try {
   dbConnect();
} catch (error) {
  console.error(error);
}

export default app;
