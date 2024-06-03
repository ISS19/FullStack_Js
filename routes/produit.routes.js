const router = require("express").Router();
const produitController = require("../controllers/produit.controller");

router.post("/addprod", produitController.addprod);
router.get("/listeByIdSec/:idSec", produitController.listeProdByRef);
router.get('/statistiqueJ', produitController.statistiqueJ);
router.get('/statistiqueF', produitController.statistiqueF);
router.get('/statistiqueM', produitController.statistiqueM);
router.get('/statistiqueA', produitController.statistiqueA);
router.get('/statistiqueMai', produitController.statistiqueMai);
router.get('/statistiqueJn', produitController.statistiqueJn);
router.get('/statistiqueJll', produitController.statistiqueJll);
router.get('/statistiqueAu', produitController.statistiqueAu);
router.get('/statistiqueS', produitController.statistiqueS);
router.get('/statistiqueO', produitController.statistiqueO);
router.get('/statistiqueN', produitController.statistiqueN);
router.get('/statistiqueD', produitController.statistiqueD);

module.exports = router;