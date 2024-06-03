import LeftBox from "@/components/LeftBox.jsx";
import RightBox from "@/components/RightBox.jsx";
import { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin.jsx";
import style from "../../styles/LeftBox.module.css";
import styleD from "../../styles/RightBox.module.css";
import UserService from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Carte() {

    const toastOption = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const [userId, setUserId] = useState();
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [numTel, setNumTel] = useState("");
    const [userStatus, setUserStatus] = useState("Chef de secteur");
    const [selectedUser, setSelectedUser] = useState(null);

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const userSessionId = localStorage.getItem('user-session-id');
        if (!userSessionId) {
            // Rediriger vers la page de login si le user-session-id n'existe pas
            window.location.href = '/login';
        }{RefreshListe();}
    }, []);

    const RefreshListe = () => {
        UserService.getSecteur()
            .then(res => {
                console.log(res.data);
                setAllUsers(res.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des utilisateurs après l\'ajout :', error);
            });
    }

    const randomPass = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setMdp(password);
    }

    const AddUser = (e) => {
        e.preventDefault();
        const users = { "nom": nom, "email": email, "mdp": mdp, "numTel": numTel, "status": userStatus };
        UserService.addUser(users)
            .then((res) => {
                if (res.status === 201) {
                    toast.success("Nouveau secteur créer", toastOption);
                    setNom("");
                    setEmail("");
                    setNumTel("");
                    RefreshListe();
                } else {
                    toast.error("Une erreur lors de l'ajout", toastOption);
                }
            })
            .catch((error) => {
                toast.error("Une erreur s'est produit", toastOption);
                console.log(error);
            });
    }

    const UpdateUser = (e) => {
        e.preventDefault();
        const users = { "nom": nom, "email": email, "numTel": numTel, "status": userStatus };
        UserService.updateUsers(userId, users)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Secteur mise à jour", toastOption);
                    setNom("");
                    setEmail("");
                    setNumTel("");
                    RefreshListe();
                } else {
                    toast.error("Une erreur lors de la mise à jour", toastOption);
                }
            })
            .catch((error) => {
                toast.error("Une erreur s'est produit", toastOption);
            })
    }

    const DeleteUser = (e) => {
        e.preventDefault();
        UserService.deleteUsers(userId)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Suppression éffectué", toastOption);
                    setUserId("");
                    RefreshListe();
                }
            })
            .catch((error) => {
                toast.error("Aucun secteur selectionner", toastOption);
            });
    }

    const handleRowClick = (user) => {
        setSelectedUser(user);
        setUserId(user._id);
        setNom(user.nom);
        setEmail(user.email);
        setNumTel(user.numTel);
        setUserStatus(user.status);
    }

    return (
        <>
            <HeaderAdmin />
            <ToastContainer />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LeftBox>
                    <div className={style.contentSecteur}>
                        <h2>Liste des Secteurs agricoles</h2><br />
                        <table className={style.table}>
                            <thead>
                                <tr>
                                    <td>NOM</td>
                                    <td>EMAIL</td>
                                    <td>TELEPHONE SECTEUR</td>
                                    <td>STATUS</td>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.length > 0 && allUsers.map(user => (
                                    <tr key={user._id} onClick={() => handleRowClick(user)} style={{ cursor: "pointer" }}>
                                        <td><span>{user.nom}</span></td>
                                        <td><span>{user.email}</span></td>
                                        <td><span>{user.numTel}</span></td>
                                        <td><span>{user.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </LeftBox>

                <RightBox>
                    <div className={styleD.contentSecteurDroite}>
                        <form>
                            <h2>Formulaire Secteur</h2><br />
                            <table className={style.tableForm}>
                                <tbody>
                                    <tr>
                                        <td><label>Nom: </label></td>
                                        <td><input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Email: </label></td>
                                        <td><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>N°Tel Secteur: </label></td>
                                        <td><input type="text" placeholder="N°Tel Secteur" value={numTel} onChange={(e) => setNumTel(e.target.value)} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Mot de passe: </label></td>
                                        <td><input type="text" placeholder="Mot de passe" value={mdp} onClick={randomPass} style={{ cursor: 'pointer' }} readOnly /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Status: </label></td>
                                        <td><input type="text" placeholder="Status" value={userStatus} onChange={(e) => setUserStatus(e.target.value)} readOnly /></td>
                                    </tr>
                                </tbody>
                            </table><br />
                            <button onClick={AddUser}>Ajouter</button>
                            <button onClick={UpdateUser}>Modifier</button>
                            <button onClick={DeleteUser}>Supprimer</button>
                        </form>
                    </div>
                </RightBox>
            </div>
        </>
    );
}
