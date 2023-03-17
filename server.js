const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

const connectDB = require("./config/mongoDB");
const logger = require("./logger/logger");

const userRoutes= require("./Routes/userRoutes");

dotenv.config();



const PORT = process.env.PORT;
const dbUrl = process.env.DATABASE_URI;

// instance of express
const app = express();


// middlewares
// app.use (cors());

app.use(express.json());
app.use(logger);

app.use("/users",userRoutes);

app.get("/",async(req,res)=>{
  res.json({message:"sain baina uu"})
})


connectDB(dbUrl);
app.listen(PORT, () => {
  console.log(`Server ${PORT}port deer aslaa`.blue);
});
