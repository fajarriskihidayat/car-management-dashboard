import express from "express";
const router = express.Router();

const carTypeController = require("./../controllers/carTypeController");

const isAdminOrSuperAdmin = require("../middleware/isAdminOrSuperAdmin");

router.use(isAdminOrSuperAdmin);
router.get("/all", carTypeController.get);
router.get("/:id", carTypeController.getById);
router.post("/", carTypeController.post);
router.put("/:id", carTypeController.updateType);
router.delete("/:id", carTypeController.deleteType);

module.exports = router;
