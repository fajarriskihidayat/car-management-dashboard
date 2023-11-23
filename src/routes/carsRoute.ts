import express from "express";
const router = express.Router();

const carsController = require("../controllers/carsController");

const upload = require("../middleware/upload");
const isAdminOrSuperAdmin = require("../middleware/isAdminOrSuperAdmin");

router.use(isAdminOrSuperAdmin);
router.get("/", carsController.get);
router.get("/:id", carsController.getById);
router.post("/", upload.single("picture"), carsController.post);
router.put("/:id", upload.single("picture"), carsController.updateCars);
router.delete("/:id", carsController.deleteCars);

module.exports = router;
