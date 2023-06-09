const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const colors = require("colors");
const cors = require("cors");

const connectDB = require("./config/mongoDB");
const logger = require("./middlewares/logger");
const upload = require("./middlewares/upload");
const error = require("./middlewares/error");
const cloudinary = require("./utils/cloudinary");

const userRoutes = require("./Routes/userRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
const travelRoutes = require("./Routes/travelRoutes");

const PORT = process.env.PORT;
const dbUrl = process.env.DATABASE_URI;

// instance of express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/uploads", express.static("uploads"));

app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/travels", travelRoutes);

app.get("/", async (req, res) => {
  res.json({ message: "сайн байна уу" });
});

app.post("/upload", upload.single("image"), async (req, res) => {
  console.log("REQ:", req.file);
  const result = await cloudinary.uploader.upload(req.file.path);
  // console.log("CLOUD",result);
  res
    .status(200)
    .json({ message: "амжилттай хадгаллалаа", imgUrl: result.secure_url });
});

app.use(error);

connectDB(dbUrl);
app.listen(PORT, () => {
  console.log(`Server ${PORT}port deer aslaa`.blue);
});

module.exports = app;
