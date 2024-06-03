import LeftBox from "@/components/LeftBox.jsx";
import RightBox from "@/components/RightBox.jsx";
import HeaderAdmin from "../../components/HeaderAdmin.jsx";
import style from "../../styles/LeftBox.module.css";
import LeftChart from "@/components/LeftChart.jsx";
import StatistiqueService from "../services/StatistiqueService.js";
import { useEffect, useState } from "react";

export default function Statistique() {
    const [statManioc, setStatManioc] = useState("...");
    const [statHaricot, setStatHaricot] = useState("...");
    const [statArachide, setStatArachide] = useState("...");
    const [statMais, setStatMais] = useState("...");

    useEffect(() => {
        // Vérifier si le user-session-id est présent dans le localStorage
        const userSessionId = localStorage.getItem('user-session-id');
        if (!userSessionId) {
            // Rediriger vers la page de login si le user-session-id n'existe pas
            window.location.href = '/login';
        } else {
            // Fetch statistiques seulement si user-session-id existe
            StatistiqueService.statManioc().then((res) => {
                setStatManioc(res.data.pourcentage);
            });
            StatistiqueService.statHaricot().then((res) => {
                setStatHaricot(res.data.pourcentage);
            });
            StatistiqueService.statArachide().then((res) => {
                setStatArachide(res.data.pourcentage);
            });
            StatistiqueService.statMais().then((res) => {
                setStatMais(res.data.pourcentage);
            });
        }
    }, []);
    return (
        <>
            <HeaderAdmin />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftBox>
                    <div className={style.contentApropos}>
                        <div style={{ display: 'flex' }}>
                            <div className={style.card}>
                                <div className={style.imgBox}>
                                    <img src="/assets/img/maïs.png" alt="" />
                                </div>
                                <div className={style.content}>
                                    <h6><strong>Maïs</strong></h6>
                                    <h3>{statMais}%</h3>
                                </div>
                            </div>
                            <div className={style.card}>
                                <div className={style.imgBox}>
                                    <img src="/assets/img/arachide.png" alt="" />
                                </div>
                                <div className={style.content}>
                                    <h6><strong>Arachide</strong></h6>
                                    <h3>{statArachide}%</h3>
                                </div>
                            </div>
                            <div className={style.card}>
                                <div className={style.imgBox}>
                                    <img src="/assets/img/beans.png" alt="" />
                                </div>
                                <div className={style.content}>
                                    <h6><strong>Haricot</strong></h6>
                                    <h3>{statHaricot}%</h3>
                                </div>
                            </div>
                            <div className={style.card}>
                                <div className={style.imgBox}>
                                    <img src="/assets/img/manioc.png" alt="" />
                                </div>
                                <div className={style.content}>
                                    <h6><strong>Manioc</strong></h6>
                                    <h3>{statManioc}%</h3>
                                </div>
                            </div>
                        </div>
                        <LeftChart />
                    </div>
                </LeftBox>
                <RightBox>
                    <img src="/assets/img/closLogo.jpg" alt="" style={{width: "400px", height:"400px", margin: "5%", marginTop:"80px"}}/>
                </RightBox>
            </div>
        </>
    );
}
