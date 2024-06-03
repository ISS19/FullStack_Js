import { useEffect, useState } from 'react';
import NavbarSecteur from "@/components/NavbarSecteur";
import TopBox from "@/components/TopBox";
import BottomBox from "@/components/BottomBox";
import style from "../../styles/TopBox.module.css";
import styleB from "../../styles/BottomBox.module.css";
import ProduitService from '../services/ProduitService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Production() {

    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const [type, setType] = useState("Principal");
    const [produit, setProduit] = useState("Maïs");
    const [quantite, setQuantite] = useState("");
    const [mois, setMois] = useState("");
    const [allProd, setAllProd] = useState([]);
    const idSec = JSON.parse(localStorage.getItem("user-session-id"));

    const addProduit = (e) => {
        e.preventDefault();
        const prod = { "type": type, "produit": produit, "quantite": quantite, "idSec": idSec, "mois": mois };
        ProduitService.addprod(prod)
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Nouveau produit ajouter", toastOption);
                    setQuantite("");
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

    useEffect(() => {
        const userSessionId = localStorage.getItem('user-session-id');
        if (!userSessionId) {
            // Rediriger vers la page de login si le user-session-id n'existe pas
            window.location.href = '/login';
        } else{
            const currentDate = new Date();
            const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

            setMois(currentMonth);
            RefreshListe();
        }
    }, []);
    const RefreshListe = () => {
        ProduitService.listeByIdSec(idSec)
            .then(res => {
                console.log(res.data.prod);
                setAllProd(res.data.prod);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs après l\'ajout :', error);
            });
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <ToastContainer />
                <NavbarSecteur />
                <div style={{ display: "block" }}>
                    <TopBox>
                        <div className={style.productionContent}>
                            <img src="/assets/img/closLogo.jpg" alt="" />
                            <table>
                                <thead>
                                    <tr>
                                        <td>Type:</td>
                                        <td>
                                            <select className={styleB.listeProduit} value={type} onChange={(e) => setType(e.target.value)}>
                                                <option value="Principal">Principal</option>
                                                <option value="Simple">Simple</option>
                                            </select>
                                        </td>
                                        <td>Produit:</td>
                                        <td>
                                            {type === "Principal" ? (
                                                <select className={styleB.listeProduit} value={produit} onChange={(e) => setProduit(e.target.value)}>
                                                    <option value="Maïs">Maïs</option>
                                                    <option value="Arachide">Arachide</option>
                                                    <option value="Haricot">Haricot</option>
                                                    <option value="Manioc">Manioc</option>
                                                </select>
                                            ) : (
                                                <select className={styleB.listeProduit}>
                                                    <option value="Autre">Autre</option>
                                                </select>
                                            )}
                                        </td>
                                        <td>Quantité:</td>
                                        <td><input type="text" name="quantite" value={quantite} onChange={(e) => setQuantite(e.target.value)} placeholder="Quantité" /></td>
                                        <td>Mois:</td>
                                        <td><input type="text" name="quantite" value={mois} onChange={(e) => setMois(e.target.value)} placeholder="Mois" disabled/></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><button type="button" onClick={addProduit}>Valider</button></td>
                                    </tr>
                                </thead>
                            </table>
                            <img src="/assets/img/closLogo.jpg" alt="" />
                        </div>
                    </TopBox>

                    <BottomBox>
                        <h1>Production</h1>
                        <table className={styleB.table}>
                            <thead>
                                <tr>
                                    <td>Type</td>
                                    <td>Produit</td>
                                    <td>Quantité</td>
                                </tr>
                            </thead>

                            <tbody>
                                {allProd.length > 0 && allProd.map(prod => (
                                    <tr key={prod._id} /* onClick={() => handleRowClick(user)} */ style={{ cursor: "pointer" }}>
                                        <td><span>{prod.type}</span></td>
                                        <td><span>{prod.produit}</span></td>
                                        <td><span>{prod.quantite} kg</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </BottomBox>
                </div>
            </div>
        </>
    )
}
