import React from 'react';
import style from '../styles/LeftBox.module.css';
import { motion } from "framer-motion";

const LeftBox = ({ children }) => {
    return (
        <motion.div className={style.LeftBox}
            initial={{ marginLeft: '-1000px' }}
            animate={{ marginLeft: '10px' }} 
            exit={{ marginLeft: '-1100px' }} 
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], type: 'spring' }}
        >
            {children}
        </motion.div>
    );
};

export default LeftBox;