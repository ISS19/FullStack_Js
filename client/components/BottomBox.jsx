import React from 'react';
import style from "../styles/BottomBox.module.css";
import { motion } from 'framer-motion';

const BottomBox = ({ children }) => {
    return (
        <motion.div className={style.bottombox}
            initial={{ marginTop: '2000px' }} // Change marginTop to start from off-screen bottom
            animate={{ marginTop: '10px' }}
            exit={{ marginTop: '2000px' }} // Change marginTop to exit towards off-screen bottom
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default BottomBox;
