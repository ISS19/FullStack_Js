const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        produit: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        quantite: {
            type: Number,
            maxlength: 20,
        },
        idSec: {
            type: String,
            maxlength: 100,
        },
        mois: {
            type: String,
            maxlength: 20
        }
    },
    {
        timestamps: true,
    }
);

const ProduitModel = mongoose.model("produit", produitSchema);

module.exports = ProduitModel;
