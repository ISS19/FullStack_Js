const ProduitModel = require("../model/produit.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.statistiqueJ = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "janvier", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueF = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "février", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueM = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "mars", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueA = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "avril", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err); 
    }
}
module.exports.statistiqueMai = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "mai", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueJn = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "juin", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueJll = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "juillet", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueAu = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "août", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueS = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "septembre", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueO = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "octobre", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueN = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "novembre", idSec: idSec } }, 
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statistiqueD = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "décembre", idSec: idSec } },
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        if (totalQuantite.length > 0) {
            res.status(200).json({ totalQuantite: totalQuantite[0].total });
        } else {
            res.status(200).json({ totalQuantite: 0 });
        }
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}

module.exports.statMais = async (req, res) => {
    try {
        const totalAllProduits = await ProduitModel.aggregate([
            { $group: { _id: null, total: { $sum: "$quantite" } } }
        ]);

        const totalProduit = await ProduitModel.aggregate([
            { $match: { produit: "Maïs" } },
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        let pourcentage = 0;
        if (totalAllProduits.length > 0 && totalProduit.length > 0) {
            const totalAll = totalAllProduits[0].total;
            const totalSpecific = totalProduit[0].total;
            pourcentage = ((totalSpecific / totalAll) * 100).toFixed(2);
        }

        res.status(200).json({ pourcentage });
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statArachide = async (req, res) => {
    try {
        const totalAllProduits = await ProduitModel.aggregate([
            { $group: { _id: null, total: { $sum: "$quantite" } } }
        ]);

        const totalProduit = await ProduitModel.aggregate([
            { $match: { produit: "Arachide" } },
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        let pourcentage = 0;
        if (totalAllProduits.length > 0 && totalProduit.length > 0) {
            const totalAll = totalAllProduits[0].total;
            const totalSpecific = totalProduit[0].total;
            pourcentage = ((totalSpecific / totalAll) * 100).toFixed(2);
        }

        res.status(200).json({ pourcentage });
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statManioc = async (req, res) => {
    try {
        const totalAllProduits = await ProduitModel.aggregate([
            { $group: { _id: null, total: { $sum: "$quantite" } } }
        ]);

        const totalProduit = await ProduitModel.aggregate([
            { $match: { produit: "Manioc" } },
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        let pourcentage = 0;
        if (totalAllProduits.length > 0 && totalProduit.length > 0) {
            const totalAll = totalAllProduits[0].total;
            const totalSpecific = totalProduit[0].total;
            pourcentage = ((totalSpecific / totalAll) * 100).toFixed(2);
        }

        res.status(200).json({ pourcentage });
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
module.exports.statHaricot = async (req, res) => {
    try {
        const totalAllProduits = await ProduitModel.aggregate([
            { $group: { _id: null, total: { $sum: "$quantite" } } }
        ]);

        const totalProduit = await ProduitModel.aggregate([
            { $match: { produit: "Haricot" } },
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        let pourcentage = 0;
        if (totalAllProduits.length > 0 && totalProduit.length > 0) {
            const totalAll = totalAllProduits[0].total;
            const totalSpecific = totalProduit[0].total;
            pourcentage = ((totalSpecific / totalAll) * 100).toFixed(2);
        }

        res.status(200).json({ pourcentage });
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}

module.exports.statSec = async (req, res) => {
    const { idSec } = req.params;
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { idSec: idSec } },
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        const totalAllSectors = await ProduitModel.aggregate([
            { $group: { _id: null, total: { $sum: "$quantite" } } } 
        ]);

        let pourcentage = 0;
        if (totalQuantite.length > 0 && totalAllSectors.length > 0) {
            const totalSector = totalQuantite[0].total;
            const totalAll = totalAllSectors[0].total;
            pourcentage = ((totalSector / totalAll) * 100).toFixed(2);
        }

        res.status(200).json({ pourcentage });
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
}
