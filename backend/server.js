// backend/server.js

// const cors = require("cors");
import cors from 'cors';
// const express = require("express");
import express from "express";
// const eventRouter = require('./routes/eventsRoutes.js');
import router from "./routes/eventsRoutes.js";
// const dotenv = require("dotenv");
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(router)
app.get("/", (req, res) => res.send("Hello World!"));