import express from "express";
const router = express.Router();

const rolesController = require("./../controllers/rolesController");

// const isAdminOrSuperAdmin = require("../middleware/isAdminOrSuperAdmin");

// router.use(isAdminOrSuperAdmin);
router.get("/all", rolesController.get);
router.get("/:id", rolesController.getById);
router.post("/", rolesController.post);
router.put("/:id", rolesController.updateRole);
router.delete("/:id", rolesController.deleteRole);

module.exports = router;
