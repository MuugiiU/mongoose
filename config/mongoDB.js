const mongoose = require("mongoose");

// const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async (dbUrl) => {
  try {
    const db = await mongoose.connect(dbUrl);
    console.log(`MongoDB-тэй холбогдлоо ${db.connection.host}`.magenta);
  } catch (err) {
    console.log("MongoDB-тэй холбогдох үед алдаа гарлаа:", err);
  }
};
module.exports = connectDB;
