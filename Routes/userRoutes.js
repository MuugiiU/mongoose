const express =require("express");
const {createUser,getAllUsers,getUser,updateUser,deleteUser}= require("../controllers/userController");

const router = express.Router();

router.route("/").post(createUser).get(getAllUsers);
router.get("/:id",getUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;