require('dotenv').config()

import cors from "cors"
import { dbConnect } from "./config/database";
import { Express } from "express";
import * as bodyParser from "body-parser"


const router = require("./routes/index");

const express = require("express");
const app : Express = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/todo",router);


try {
    dbConnect();
    app.listen(PORT , () => {
      console.log(`listen port ${PORT}`);
    })    
} catch (error) {
    console.error(`Error listen : ${error}`);
}

