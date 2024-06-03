const router = require("express").Router();
const statistiqueController = require("../controllers/statistique.controller");

router.get('/statistiqueJ/:idSec', statistiqueController.statistiqueJ);
router.get('/statistiqueF/:idSec', statistiqueController.statistiqueF);
router.get('/statistiqueM/:idSec', statistiqueController.statistiqueM);
router.get('/statistiqueA/:idSec', statistiqueController.statistiqueA);
router.get('/statistiqueMai/:idSec', statistiqueController.statistiqueMai);
router.get('/statistiqueJn/:idSec', statistiqueController.statistiqueJn);
router.get('/statistiqueJll/:idSec', statistiqueController.statistiqueJll);
router.get('/statistiqueAu/:idSec', statistiqueController.statistiqueAu);
router.get('/statistiqueS/:idSec', statistiqueController.statistiqueS);
router.get('/statistiqueO/:idSec', statistiqueController.statistiqueO);
router.get('/statistiqueN/:idSec', statistiqueController.statistiqueN);
router.get('/statistiqueD/:idSec', statistiqueController.statistiqueD);
router.get('/statMais', statistiqueController.statMais);
router.get('/statHaricot', statistiqueController.statHaricot);
router.get('/statManioc', statistiqueController.statManioc);
router.get('/statArachide', statistiqueController.statArachide);
router.get("/statSec/:idSec", statistiqueController.statSec);

module.exports = router;