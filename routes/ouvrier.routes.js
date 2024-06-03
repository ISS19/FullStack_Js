const router = require("express").Router();
const ouvrierController = require("../controllers/ouvrier.controller");

router.post("/addouvrier", ouvrierController.addOuvrier);
router.get("/liste/:idSec", ouvrierController.getOuvrier);
router.put("/modifier/:id", ouvrierController.updateOuvrier);
router.delete("/supprimer/:id", ouvrierController.deleteOuvrier);

module.exports = router;