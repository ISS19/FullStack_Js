import Header from "../components/header";
import { motion } from "framer-motion";
import style from "../styles/Login.module.css";
import { useState } from "react";
import UserService from "./services/UserService";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


export default function login() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const router = useRouter();
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  }

  const Login = async (e) => {
    e.preventDefault();
    const user = { email, mdp };
    UserService.login(user)
      .then((res) => {
        const message = res.data.message;
        if (res.status === 200 && res.data.user.status == "Admin") {
          router.push('/Admin/statistique');
          localStorage.setItem("user-session", JSON.stringify(res.data.user.nom));
          localStorage.setItem("user-session-id", JSON.stringify(res.data.user._id));
        } 
        else if(res.status === 200 && res.data.user.status == "Chef de secteur"){
          router.push('/Secteur/statistique');
          localStorage.setItem("user-session", JSON.stringify(res.data.user.nom));
          localStorage.setItem("user-session-id", JSON.stringify(res.data.user._id));
        }
        else {
          toast.error("Une erreur innattendu s'est produit", toastOption);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          toast.error("Erreur : Informations d'identification incorrectes.", toastOption);
        } else if (error.response && error.response.status === 500) {
          toast.error("Erreur : Une erreur interne du serveur s'est produite. Veuillez réessayer plus tard.", toastOption);
        } else {
          toast.error("Erreur : Une erreur inattendue s'est produite.", toastOption);
        }
      });
  }
  return (
    <>
      <div>
        <Header />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={style.login} id="main">
            <div className={style.formLogin} id="formLogin">
              <form>
                <div className={style.formBorder}>
                  <h2><strong>Se connecter</strong></h2> <br />
                  <input type="Email" name="inEmail" className={style.inEmail} placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                  <input type="password" name="inMdp" className={style.inMdp} placeholder="Mot de passe" value={mdp} onChange={(e) => { setMdp(e.target.value) }} /><br /><br /><br />
                  <button name="btnLogin" onClick={Login}>Valider</button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
        <ToastContainer />
      </div>
    </>
  );
}
