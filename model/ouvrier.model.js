const mongoose = require('mongoose');

const ouvrierSchema = new mongoose.Schema(
    {
        nom:{
            type: String,
            trim: true,
            maxlength: 50,
        },
        prenom:{
            type: String,
            trim: true,
            maxlength: 50,
        },
        sexe: {
            type: String,
            trim: true,
            maxlength: 10,
        },
        CIN: {
            type: String,
            trim: true,
            maxlength: 15,
        },
        idSec: {
            type: String,
            maxlength: 100,
        },
    },
    {
        timestamps: true,
    }
)

const OuvrierModel = mongoose.model("ouvrier", ouvrierSchema);

module.exports = OuvrierModel;