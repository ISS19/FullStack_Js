import React from 'react';
import { motion } from 'framer-motion';
import style from "../styles/ChatBox.module.css";

const ChatBox = () => {
    return (
        <motion.div className={style.chatbox}
            initial={{ marginLeft: '-1000px' }}
            animate={{ marginLeft: '10px' }}
            exit={{ marginLeft: '-1000px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], type: 'spring' }}
        >
            <div className={style.HeaderBox}>
                <img src="/assets/img/chat_50px.png" alt="" />
                <h2>Message</h2>
            </div>
            <hr />
        </motion.div>
    );
};

export default ChatBox;