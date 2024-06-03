import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/Header.module.css";

const header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(date.toLocaleDateString("fr-FR", options));
  }, []);
  return (
    <>
      <div className={style.headerBis}>
        <p>{currentDate}</p>
      </div>
      <div className={style.header}>
        <h1>Clos<span style={{color: "#4F5726"}}>Mazala</span></h1>
        <ul className={style.nav}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/apropos">A propos</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default header;
