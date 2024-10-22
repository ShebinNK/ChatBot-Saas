import express, { response } from "express";
import {config} from "dotenv";
import { json } from "stream/consumers";
config();
const app = express();

//middleware
app.use(express.json());

export default app;