const OuvrierModel = require("../model/ouvrier.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.addOuvrier = async (req, res) => {
    const { nom, prenom, sexe, CIN, idSec } = req.body;

    try {
        const ouvrier = await OuvrierModel.create({ nom, prenom, sexe, CIN, idSec });
        res.status(201).json({ ouvrier: ouvrier._id });
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}
module.exports.getOuvrier = async (req, res) => {
    const {idSec} = req.params
    try {
        const ouvrier = await OuvrierModel.find({idSec: idSec});
        const count = ouvrier.length;
        res.status(200).json({ouvrier, count})
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}
module.exports.updateOuvrier = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id " + req.params.id + " not found");

    try {
        const updatedOuvrier = await OuvrierModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    nom: req.body.nom,
                    prenom: req.body.prenom,
                    sexe: req.body.sexe,
                    CIN: req.body.CIN
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        if (!updatedOuvrier) {
            return res.status(404).send("User not found");
        }

        res.send(updatedOuvrier);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}
module.exports.deleteOuvrier = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id " + req.params.id + " not found");

    try {
        const result = await OuvrierModel.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Ouvrier " + req.params.id + " is deleted" })
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err })
    }
}