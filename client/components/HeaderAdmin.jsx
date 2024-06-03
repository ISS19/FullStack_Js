import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/HeaderAdmin.module.css";

const header = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <div className={style.headerBis}>
        <p>{currentDate}</p>
        <div className={style.action}>
            <img alt="" src="/assets/img/user_30px.png" onClick={toggleDropdown}/>
            {dropdownOpen && (
              <div className={style.dropdown}>
                <Link href="/login" style={{color: "black", textDecoration: "none"}} onClick={()=>{localStorage.clear()}}>Déconnexion</Link>
              </div>
            )}
        </div>
      </div>
      <div className={style.header}>
        <h1>Clos<span style={{color: "#4F5726"}}>Mazala</span></h1>
        <ul className={style.nav}>
          <li> 
            <Link href="/Admin/statistique">Statistique</Link>
          </li>
          <li>
            <Link href="/Admin/secteur">Secteur</Link>
          </li>
          <li>
            <Link href="/Admin/carte">Carte</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default header;
