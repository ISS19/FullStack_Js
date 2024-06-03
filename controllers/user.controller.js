const UserModel = require("../model/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.addUsers = async (req, res) => {
    const { nom, email, mdp, numTel, status } = req.body;

    try {
        const user = await UserModel.create({ nom, email, mdp, numTel, status });
        res.status(201).json({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}

module.exports.login = async (req, res) => {
    const { email, mdp } = req.body;

    try {
        const user = await UserModel.findOne({ email, mdp });

        if (!user) {
            res.status(401).json({ message: "Informations incorrectes" });
        } else {
            req.session.user = user;
            res.status(200).json({ message: "Connexion effectué", user });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de l'authentification." });
    }
}

module.exports.logout = (req, res) => {
    try {
        req.session.destroy(err => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: "Erreur lors de la déconnexion." });
            } else {
                res.status(200).json({ message: "Déconnexion réussie" });
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de la déconnexion." });
    }
}

module.exports.getSecteur = async (req, res) => {
    try {
        const users = await UserModel.find({ status: "Chef de secteur" });
        res.status(200).json(users)
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
}

module.exports.updateUsers = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id " + req.params.id + " not found");

    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    nom: req.body.nom,
                    email: req.body.email,
                    numTel: req.body.numTel,
                    status: req.body.status
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.send(updatedUser);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

module.exports.deleteUsers = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("Id " + req.params.id + " not found");

    try {
        const result = await UserModel.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "User " + req.params.id + " is deleted" })
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err })
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find({ _id: { $ne: req.params.id } }).select([
            "_id",
            "nom",
            "email",
            "numTel",
            "status"
        ]);
        return res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

module.exports.changeMdp = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        const newMdp = req.body.mdp;

        if (req.body.ancienMdp !== user.mdp) {
            return res.status(400).json({ Erreur: 'Votre ancien mot de passe est invalide' });
        }

        if(newMdp == ""){
            return res.status(400).json({ Erreur: 'Le nouveau mot de passe est vide' });
        }
        const updatedUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            { $set: { mdp: newMdp } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        return res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
