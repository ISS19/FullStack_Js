import NavbarSecteur from "@/components/NavbarSecteur";
import TopBox from "@/components/TopBox";
import BottomBox from "@/components/BottomBox";
import style from "../../styles/TopBox.module.css";
import BottomChart from "@/components/BottomChart";
import OuvrierService from '../services/OuvrierService';
import StatistiqueService from "../services/StatistiqueService";
import { useEffect, useState } from "react";

export default function () {
    const [nbrOuvrier, setNbrOuvrier] = useState("...");
    const [producitivite, setProducitivite] = useState("...");
    const idSec = JSON.parse(localStorage.getItem("user-session-id"));

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
                console.log(res.data.count);
                setNbrOuvrier(res.data.count);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs après l\'ajout :', error);
            });

        StatistiqueService.statSec(idSec)
            .then(res => {
                console.log(res.data.pourcentage);
                setProducitivite(res.data.pourcentage);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs après l\'ajout :', error);
            });
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <NavbarSecteur />
                <div style={{ display: "block" }}>
                    <TopBox>
                        <div className={style.boxNbrOuvrier}>
                            <h2>Nombre d'ouvrier</h2>
                            <h4>{nbrOuvrier}</h4>
                        </div>
                        <div className={style.boxNbrOuvrier}>
                            <h2>Productivité</h2>
                            <h4>{producitivite}%</h4>
                        </div>
                    </TopBox>

                    <BottomBox>
                        <h1>Statistique</h1><br />
                        <BottomChart />
                    </BottomBox>
                </div>
            </div>
        </>
    )
}