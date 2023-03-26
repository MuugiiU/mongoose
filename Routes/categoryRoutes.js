const express= require("express");
const {createCategory, getAllCategory, getCategory,updateCategory,deletCategory}= require("../controllers/categoryController");

const router = express.Router();

router.route("/").post(createCategory).get(getAllCategory);
router.get("/:id", getCategory);
router.put("/:id",updateCategory);
router.delete("/:id",deletCategory);

module.exports =router;