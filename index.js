import express from "express";

import allRoutes from "./src/routes/incidents.routes.js";

import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT;
const connectionString = process.env.ATLAS_URI;

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

allRoutes(app);

app.get("/", (req, res) => {
  res.json({ message: "This is the GET route." });
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
