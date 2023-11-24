import express from "express";
const router = express.Router();

const logActivitiesController = require("./../controllers/logActivitiesController");

const isAdminOrSuperAdmin = require("../middleware/isAdminOrSuperAdmin");

router.use(isAdminOrSuperAdmin);
router.get("/", logActivitiesController.get);

module.exports = router;
