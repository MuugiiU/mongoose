const { Router } = require("express");
const {
  createTravel,
  getAllTravels,
  getTravel,
  updateTravel,
  deleteTravel,
} = require("../controllers/travel");

const router = Router();

router.route("/").post(createTravel).get(getAllTravels);

router.route("/:id").get(getTravel).put(updateTravel).delete(deleteTravel);

module.exports = router;
