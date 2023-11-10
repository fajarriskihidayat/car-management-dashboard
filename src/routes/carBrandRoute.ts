import express from "express";
const router = express.Router();
const carBrandController = require("./../controllers/carBrandController");

router.get("/", carBrandController.get);
router.get("/:id", carBrandController.getById);
router.post("/", carBrandController.post);
router.put("/:id", carBrandController.updateBrand);
router.delete("/:id", carBrandController.deleteBrand);

module.exports = router;
