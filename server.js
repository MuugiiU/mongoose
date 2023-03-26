const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const connectDB = require("./config/mongoDB");
const logger = require("./logger/logger");

const multer= require("multer");

const userRoutes= require("./Routes/userRoutes");
const categoryRoutes=require("./Routes/categoryRoutes");

dotenv.config();

const upload= multer({dest:"uploads/"})

const PORT = process.env.PORT;
const dbUrl = process.env.DATABASE_URI;

// instance of express
const app = express();


// middlewares
// app.use (cors());

app.use(express.json());
app.use(logger);

app.use("/users",userRoutes);
app.use("/category",categoryRoutes);

app.get("/",async(req,res)=>{
  res.json({message:"sain baina uu"})
})

app.post("/upload",upload.single("image"),(req,res)=>{
  console.log("req:", req.file)
  res.status(200).json({message:"amjilttai hadgallaa",})
})


connectDB(dbUrl);
app.listen(PORT, () => {
  console.log(`Server ${PORT}port deer aslaa`.blue);
});
