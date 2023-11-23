import express from "express";
const router = express.Router();

const carsController = require("../controllers/carsController");

const upload = require("../middleware/upload");
const isAdminOrSuperAdmin = require("../middleware/isAdminOrSuperAdmin");

router.use(isAdminOrSuperAdmin);
router.get("/", carsController.get);
router.get("/:id", carsController.getById);
router.post("/:user_id", upload.single("picture"), carsController.post);
router.put(
  "/:user_id/:id",
  upload.single("picture"),
  carsController.updateCars
);
router.delete("/:user_id/:id", carsController.deleteCars);

module.exports = router;
