import React from 'react';
import style from '../styles/Footer.module.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.row}>
                    <div>
                        <h4>Contact Us</h4>
                        <ul className={style.listunstyled}>
                            <li>Phone: 0343694637</li>
                            <li>Email: clos@gmail.com</li>
                            <li>Address: Ambatomena, Fianarantsoa</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
