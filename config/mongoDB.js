const mongoose = require("mongoose");

// const DATABASE_URI = process.env.DATABASE_URI;

const connectDB = async (dbUrl) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB-tei connections");
  } catch (err) {
    console.log("MongoDB-tei holbogdoh ued aldaa garlaa", err);
  }
};
module.exports = connectDB;
