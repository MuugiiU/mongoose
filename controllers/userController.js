const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(200).json({ message: "Хэрэглэгчийн мэдээлэл хоосон байна." });
    }
    res.status(201).json({ message: "Хэрэглэгчийн мэдээлэл олдлоо.", users });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { name, email, password, profileImg } = req.body;

  try {
    if (!name || !email || !password) {
      res
        .status(400)
        .json({ message: "Нэр,имэйл эсвэл нууц үг байхгүй байна." });
    }
    const user = await User.create({
      name,
      email,
      password,
      profileImg,
    });
    res.status(201).json({ message: "амжилттай бүртгэгдлээ.", user });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ message: `${id} -тэй хэрэглэгч хоосон байна.` });
  }
  try {
    const user = await User.findById(`${id}`);
    if (!user) {
      res.status(400).json({ message: `${id} -тэй хэрэглэгч олдохгүй байна.` });
    }
    res.status(200).json({ message: `${id} -тэй хэрэглэгч олдлоо.`, user });
  } catch (err) {
    next(error);
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} -тэй хоосон байна` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(400).json({ message: `${id}-тэй хэрэглэгч олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id}-тэй хэрэглэгч шинэчлэгдлээ.`, user });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: `${id} -тэй хэрэглэгч олдсонгүй.` });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: `${id} -тэй хэрэглэгч устгагдлаа.`, user });
  } catch (err) {
    next(error);
  }
};

const login = async (req, res, next) => {
  console.log(req.body);

  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    console.log("user", user);
    if (!user) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }
    const checkPass = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPass) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    }

    const { password, _id, name, email, role } = user;

    const token = jwt.sign(
      { _id, name, email, role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 36000,
      }
      // iim hesgeer token uusgej ugch bg heseg
    );
    res.status(200).json({ message: `Амжилттай нэвтэрлэлээ.`, user, token });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  const { name, email, password, phone } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(200).json({ message: `Амжилттай бүртгэгдлэлээ.`, user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register,
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
