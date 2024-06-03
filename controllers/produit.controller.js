const ProduitModel = require("../model/produit.model");
const ObjectId = require("mongoose").Types.ObjectId;


module.exports.addprod = async (req, res)=>{
    const { type, produit, quantite, idSec, mois } = req.body;

    try {
        const prod = await ProduitModel.create({ type, produit, quantite, idSec, mois });
        res.status(201).json({ prod: prod._id });
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}
module.exports.listeProdByRef = async (req, res)=>{
    if (!ObjectId.isValid(req.params.idSec))
        return res.status(400).send("Id " + req.params.idSec + " not found");

    try {
        const prod = await ProduitModel.find({idSec: req.params.idSec}).select([
            "type",
            "produit",
            "quantite",
        ]);
        res.status(200).json({prod});
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}
module.exports.statistiqueJ = async (req, res) => {
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "janvier" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "février" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "mars" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "avril" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "mai" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "juin" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "juillet" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "août" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "septembre" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "octobre" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "novembre" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
    try {
        const totalQuantite = await ProduitModel.aggregate([
            { $match: { mois: "décembre" } }, // Match documents for the month of "avril"
            { $group: { _id: null, total: { $sum: "$quantite" } } } // Group and calculate the total quantity
        ]);

        // Check if there is a result
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
