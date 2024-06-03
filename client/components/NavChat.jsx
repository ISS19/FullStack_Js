import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from "../styles/NavChat.module.css";
import UserService from '@/pages/services/UserService';

const NavbarSecteur = () => {
    const [contacts, setContacts] = useState([]);
    const userSession = JSON.parse(localStorage.getItem("user-session"));
    useEffect(() => {
        UserService.otherUser(JSON.parse(localStorage.getItem("user-session-id")))
            .then((res)=>{
                console.log(res.data)
                setContacts(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[])
    return (
        <motion.div className={style.navchat}
            initial={{ marginLeft: '-1000px' }}
            animate={{ marginLeft: '10px' }}
            exit={{ marginLeft: '-1000px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], type: 'spring' }}
        >
            <div className={style.HeaderBar}>
                <img src="/assets/img/sprout_50px.png" alt="" />
                <h2>{userSession}</h2>
            </div>
            <hr />
            <div className={style.chatliste}>
                {contacts.map(contact=>(
                    <ul key={contact._id}>
                        <li><h3>{contact.nom}: {contact.status}</h3></li>
                    </ul>
                ))}
            </div>
        </motion.div>
    );
};

export default NavbarSecteur;