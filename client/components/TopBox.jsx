import React from 'react';
import style from "../styles/TopBox.module.css";
import { motion } from 'framer-motion';

const TopBox = ({ children }) => {
    return (
        <motion.div className={style.topbox}
            initial={{ marginTop: '-1000px' }}
            animate={{ marginTop: '10px' }}
            exit={{ marginTop: '-1000px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], type: 'keyframes' }}
        >
            <video autoPlay loop muted className={style.backgroundVideo}>
                <source src={'/assets/bgVideo.mp4'} type="video/mp4" />
            </video>
            {children}
        </motion.div>
    );
};

export default TopBox;