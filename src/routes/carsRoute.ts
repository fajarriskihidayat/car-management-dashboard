const express = require("express");
const router = express.Router();
const carsController = require("../controllers/carsController");

router.get("/", carsController.get);
router.get("/:id", carsController.getById);
router.post("/", carsController.post);
router.put("/:id", carsController.updateCars);
router.delete("/:id", carsController.deleteCars);

module.exports = router;
