import React, { useState } from 'react';
import style from "../styles/NavbarSecteur.module.css";
import Link from 'next/link';
import UserService from "../pages/services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const NavbarSecteur = () => {
    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [ancienMdp, setAncienMdp] = useState("");
    const [mdp, setMdp] = useState("");
    const userId = JSON.parse(localStorage.getItem('user-session-id'));

    const changeMdp = (e) => {
        e.preventDefault();
        const mdpChange = { "ancienMdp": ancienMdp, "mdp": mdp };
        UserService.changeMdp(userId, mdpChange)
            .then((res) => {
                console.log('API Response:', res);
                if (res.status === 200) {
                    setDropdownOpen(!dropdownOpen);
                    toast.success("Mot de passe modifié avec succès", toastOption);
                    setAncienMdp("");
                    setMdp("");
                }
                else{
                    toast.error("Erreur: "+ res.data.Erreur, toastOption);
                }
            })
            .catch((err) => {
                toast.error(err.response.data.Erreur, toastOption);
                console.log(err);
            });
    }
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className={style.navbar}>
            {/* <ToastContainer /> */}
            <div className={style.Link}>
                <div className={style.navBouton} onClick={toggleDropdown} >
                    <img src="/assets/img/account.png" alt="" className={style.navimg} />
                    <h4 className={style.textOverlay}>{JSON.parse(localStorage.getItem("user-session"))}</h4>
                </div>
                {dropdownOpen && (
                    <div className={style.dropdown}>
                        <h2>Mot de passe</h2><br />
                        <input type="text" placeholder='Ancien mdp' value={ancienMdp} onChange={(e) => { setAncienMdp(e.target.value) }} /><br /><br />
                        <input type="text" placeholder='Nouveau mdp' value={mdp} onChange={(e) => { setMdp(e.target.value) }} /><br /><br />
                        <button onClick={changeMdp}>Modifier</button>
                    </div>
                )}
            </div>
            <br /><br /><br /><br /><br /><br />
            <Link href={"/Secteur/statistique"} className={style.Link}>
                <div className={style.navBouton}>
                    <img src="/assets/img/statistics.png" alt="" className={style.navimg} />
                    <h4 className={style.textOverlay}>Statistique</h4>
                </div>
            </Link>
            <br /><br />
            <Link href={"/Secteur/ouvrier"} className={style.Link}>
                <div className={style.navBouton}>
                    <img src="/assets/img/workers.png" alt="" className={style.navimg} />
                    <h4 className={style.textOverlay}>Ouvriers</h4>
                </div>
            </Link>
            <br /><br />
            <Link href={"/Secteur/production"} className={style.Link}>
                <div className={style.navBouton}>
                    <img src="/assets/img/soil.png" alt="" className={style.navimg} />
                    <h4 className={style.textOverlay}>Production</h4>
                </div>
            </Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Link href={"/login"} className={style.Link} onClick={() => { localStorage.clear() }}>
                <div className={style.navBouton}>
                    <img src="/assets/img/logout.png" alt="" className={style.navimg} />
                    <h4 className={style.textOverlay}>Sortir</h4>
                </div>
            </Link>
        </div>
    );
};

export default NavbarSecteur;