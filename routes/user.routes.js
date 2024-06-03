const router = require("express").Router();
const userController = require("../controllers/user.controller");

router.post("/adduser", userController.addUsers);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/liste", userController.getSecteur);
router.delete("/supprimer/:id", userController.deleteUsers);
router.put("/modifier/:id", userController.updateUsers);
router.get("/liste/:id", userController.getAllUsers);
router.put("/changeMdp/:id", userController.changeMdp);

module.exports = router;