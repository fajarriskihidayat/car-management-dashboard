import express from "express";
const router = express.Router();

const carBrandController = require("./../controllers/carBrandController");

const isAdminOrSuperAdmin = require("../middleware/isAdminOrSuperAdmin");

router.use(isAdminOrSuperAdmin);
router.get("/all", carBrandController.get);
router.get("/:id", carBrandController.getById);
router.post("/", carBrandController.post);
router.put("/:id", carBrandController.updateBrand);
router.delete("/:id", carBrandController.deleteBrand);

module.exports = router;
