const Travel = require("../model/travel");

const getAllTravels = async (req, res, next) => {
  try {
    const travels = await Travel.find().populate("category");

    res.status(201).json({ message: "Амжилттай аялалууд олдлоо.", travels });
  } catch (err) {
    next(err);
  }
};

const createTravel = async (req, res, next) => {
  const { title, imgUTL, price, day, location, viewer, category } = req.body;

  try {
    const travel = await Travel.create(req.body);
    res.status(201).json({ message: "Амжилттай аялал үүсгэлээ.", travel });
  } catch (err) {
    next(err);
  }
};
const getTravel = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res
      .status(400)
      .json({ message: `${id}-тэй аялал олдсонгүй`, err: err.message });
  }
  try {
    const travel = await Travel.findById(`${id}`);
    res.status(200).json({ message: `${id} тэй аялал олдлоо`, travel });
  } catch (error) {
    res.status(400).json({
      message: "алдаа",
      error: error.message,
    });
  }
};

const updateTravel = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй аялал олдсонгүй` });
  }
  try {
    const travel = await Travel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: `${id} -тэй аялал шинэчлэгдлээ` });
  } catch (err) {
    res.status(400).json({ message: "Алдаа", error: err.message });
  }
};
const deleteTravel = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id}-тэй аялал  олдсонгүй` });
  }
  try {
    const travel = await Travel.findByIdAndDelete(id);
    res.status(200).json({ message: `${id}-тэй аялал устгагдлалаа`, travel });
  } catch (err) {
    res.status(400).json({ message: "алдаа", error: err.message });
  }
};
module.exports = {
  createTravel,
  getAllTravels,
  getTravel,
  updateTravel,
  deleteTravel,
};
