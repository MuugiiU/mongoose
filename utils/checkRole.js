const jwt = require("jsonwetoken");

const ckeckRole = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).json({ message: "Токен явуулаагүй байна" });
  }
  console.log("BT", req.headers.authorization);
  const token = req.headers.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(user);
  if (user.role !== Admin) {
    res.status(400).json({ message: " Энэ үйлдлийг хийх эрхгүй байна." });
  }
  next();
};
module.exports = ckeckRole;
