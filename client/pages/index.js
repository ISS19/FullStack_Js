import Header from "../components/header";
import { motion } from "framer-motion";
import style from "../styles/Index.module.css";
export default function index() {
  return (
    <>
      <div>
        <Header />
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={style.container}
      >
        <img src="/assets/img/closLogo.jpg" alt="" className={style.logo} />
        <div className={style.text}>
          <h1>Bienvenu chez Clos Malaza</h1>
          <br />
          <p>Chez Clos Malaza, nous sommes passionnés par la création d'expériences exceptionnelles à travers notre mélange unique de tradition et d'innovation. En tant que fournisseur dans le domaine agricole, nous sommes fiers de proposer des produit agricole qui dépassent les attentes et laissent une impression durable.

            Notre équipe est dédiée à l'excellence dans tous les aspects de notre activité, de la qualité de nos produits à la professionnalisme de notre service client. Que vous soyez un client de longue date ou que vous nous découvriez pour la première fois, nous vous adressons un chaleureux bienvenue et vous invitons à explorer tout ce que Clos Malaza a à offrir.

            Rejoignez-nous dans un voyage de goût, de qualité et de distinction. Nous avons hâte de vous servir et de créer ensemble des moments mémorables.</p>
        </div>
        <video autoPlay loop muted className={style.backgroundVideo}>
          <source src={'/assets/bgVideo.mp4'} type="video/mp4" />
        </video>
      </motion.div>
    </>
  );
}
