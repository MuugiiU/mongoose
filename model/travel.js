const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  imgUTL: {
    type: String,
  },
  price: String,
  day: String,
  location: String,
  viewer: {
    type: String,
    maxlength: [500, "Тайлбар хамгийн ихдээ 500 тэмдэгтээс ихгүй байна"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;
