const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
  register,
} = require("../controllers/userController");

const { checkLogin, authorization } = require("../middlewares/auth");
const router = express.Router();

router
  .route("/")
  .post(createUser)
  .get(checkLogin, authorization("User"), getAllUsers);
router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(authorization, deleteUser);

router.post("/login", login);
router.post("/register", register);

module.exports = router;
