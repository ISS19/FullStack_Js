import React, { useEffect, useState } from 'react';
import NavbarSecteur from "@/components/NavbarSecteur";
import TopBox from "@/components/TopBox";
import BottomBox from "@/components/BottomBox";
import style from "../../styles/TopBox.module.css";
import styleB from "../../styles/BottomBox.module.css";
import ouvrierService from "../services/OuvrierService";
import OuvrierService from '../services/OuvrierService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {

    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [ouvrierId, setOuvrierId] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("Homme");
    const [cin, setCin] = useState("");
    const [selectedOuvrier, setSelectedOuvrier] = useState(null);
    const idSec = JSON.parse(localStorage.getItem("user-session-id"));

    const [allOuvrier, setAllOuvrier] = useState([]);

    const handleSearchInputChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);

        const filteredRows = allOuvrier.filter(row =>
            row.nom.toLowerCase().includes(value.toLowerCase()) ||
            row.prenom.toLowerCase().includes(value.toLowerCase()) ||
            row.sexe.toLowerCase().includes(value.toLowerCase()) ||
            row.CIN.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredData(filteredRows);
    };


    const ajoutOuvrier = (e) => {
        e.preventDefault();
        const ouvrier = { "nom": nom, "prenom": prenom, "sexe": sexe, "CIN": cin, "idSec": idSec };
        ouvrierService.addOuvrier(ouvrier)
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Nouveau ouvrier ajouter", toastOption);
                    setNom("");
                    setPrenom("");
                    setCin("");
                    RefreshListe();
                } else {
                    toast.error("Erreur lors de l'ajout", toastOption);
                }
            })
            .catch((error) => {
                toast.error("Une erreur s'est produit", toastOption);
                console.log(error);
            });
    }

    const deleteOuvrier = (e) => {
        e.preventDefault();
        ouvrierService.deleteOuvrier(ouvrierId)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Ouvrier virer", toastOption);
                    RefreshListe();
                } else {
                    toast.error("Erreur", toastOption);
                }
            })
            .catch((error) => {
                toast.error("Une erreur s'est produit", toastOption);
                console.log(error);
            });
    }

    const modifierOuvrier = (e) => {
        e.preventDefault();
        const ouvrier = { "nom": nom, "prenom": prenom, "sexe": sexe, "CIN": cin };
        ouvrierService.updateOuvrier(ouvrier, ouvrierId)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Information d'ouvrier mise à jour", toastOption);
                    setNom("");
                    setPrenom("");
                    setSexe("");
                    RefreshListe();
                } else {
                    toast.error("Erreur lors de la modification", toastOption);
                }
            })
            .catch((error) => {
                toast.error("Une erreur s'est produit", toastOption);
                console.log(error);
            });
    }

    useEffect(() => {
        const userSessionId = localStorage.getItem('user-session-id');
        if (!userSessionId) {
            // Rediriger vers la page de login si le user-session-id n'existe pas
            window.location.href = '/login';
        } else{RefreshListe();}
    }, []);
    const RefreshListe = () => {
        OuvrierService.getOuvrier(idSec)
            .then(res => {
                console.log(res.data.ouvrier);
                setAllOuvrier(res.data.ouvrier);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs après l\'ajout :', error);
            });
    }

    const handleRowClick = (ouvrier) => {
        setSelectedOuvrier(ouvrier);
        setOuvrierId(ouvrier._id);
        setNom(ouvrier.nom);
        setPrenom(ouvrier.prenom);
        setSexe(ouvrier.sexe);
        setCin(ouvrier.CIN);
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <NavbarSecteur />
                <div style={{ display: "block" }}>
                    <TopBox>
                        <form>
                            <div className={style.form}>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Nom:</td>
                                            <td><input type="text" name="nom" placeholder="Nom" value={nom} onChange={(e) => { setNom(e.target.value) }} /></td>
                                            <td>Prénom:</td>
                                            <td><input type="text" name="prenom" placeholder="Prénom" value={prenom} onChange={(e) => { setPrenom(e.target.value) }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Sexe:</td>
                                            <td>
                                                <select value={sexe} onChange={(e) => { setSexe(e.target.value) }}>
                                                    <option value="Homme">Homme</option>
                                                    <option value="Femme">Femme</option>
                                                </select>
                                            </td>
                                            <td>CIN:</td>
                                            <td><input type="text" name="cin" placeholder="CIN" value={cin} onChange={(e) => { setCin(e.target.value) }} /></td>
                                        </tr>
                                    </thead>
                                </table>
                                <br /><br />
                                <table>
                                    <thead>
                                        <tr>
                                            <td><button type="button" onClick={ajoutOuvrier}>Ajouter</button></td>
                                            <td></td>
                                            <td><button type="button" onClick={modifierOuvrier}>Modifier</button></td>
                                            <td></td>
                                            <td><button type="button" onClick={deleteOuvrier}>Virer</button></td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </form>
                    </TopBox>

                    <BottomBox>
                        <h1>Ouvriers</h1><br />
                        <div className={styleB.searchContaint}>
                            <img src="/assets/img/search.png" alt="" className={styleB.search} />
                            <input type="text" name="search" value={searchValue} onChange={handleSearchInputChange} placeholder="Recherche" />
                        </div>
                        <table className={styleB.table}>
                            <thead>
                                <tr>
                                    <td>NOM</td>
                                    <td>PRENOM</td>
                                    <td>SEXE</td>
                                    <td>CIN</td>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map(ouvrier => (
                                        <tr key={ouvrier._id} onClick={() => handleRowClick(ouvrier)} style={{ cursor: "pointer" }}>
                                            <td><span>{ouvrier.nom}</span></td>
                                            <td><span>{ouvrier.prenom}</span></td>
                                            <td><span>{ouvrier.sexe}</span></td>
                                            <td><span>{ouvrier.CIN}</span></td>
                                        </tr>
                                    ))
                                ) : searchValue.trim() !== '' ? (
                                    <tr>
                                        <td colSpan="4">Aucun ouvrier trouvé</td>
                                    </tr>
                                ) : (
                                    allOuvrier.length > 0 ? (
                                        allOuvrier.map(ouvrier => (
                                            <tr key={ouvrier._id} onClick={() => handleRowClick(ouvrier)} style={{ cursor: "pointer" }}>
                                                <td><span>{ouvrier.nom}</span></td>
                                                <td><span>{ouvrier.prenom}</span></td>
                                                <td><span>{ouvrier.sexe}</span></td>
                                                <td><span>{ouvrier.CIN}</span></td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4">Aucun ouvrier trouvé</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </BottomBox>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}