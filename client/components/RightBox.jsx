import React from 'react';
import style from '../styles/RightBox.module.css';
import {motion} from "framer-motion"

const RightBox = ({ children }) => {
    return (
        <motion.div className={style.RightBox}
            initial={{ marginRight: '-1000px' }}
            animate={{ marginRight: '10px' }}
            exit={{ marginRight: '-1000px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], type: 'spring' }}
        >
            {children}
        </motion.div>
    );
};

export default RightBox;