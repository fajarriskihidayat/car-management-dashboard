import express from "express";
const router = express.Router();

const auth = require("../middleware/auth");
const isSuperAdmin = require("../middleware/isSuperAdmin");

const userController = require("../controllers/usersController");

router.get("/profile", auth, userController.getUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/superadmin/login", userController.loginSuperAdmin);
router.put("/admin/add/:id", isSuperAdmin, userController.addAdmin);

module.exports = router;
