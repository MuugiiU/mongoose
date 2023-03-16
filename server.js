const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const connectDB = require("./config/mongoDB");

const PORT = process.env.PORT;
const dbUrl = process.env.DATABASE_URI;

// instance of express
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Sain baina uu" });
});

connectDB(dbUrl);
app.listen(PORT, () => {
  console.log(`Server ${PORT}port deer aslaa`.blue);
});
