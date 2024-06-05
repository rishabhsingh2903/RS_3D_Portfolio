import React from 'react';
import { motion } from 'framer-motion';
import { styles } from "../style";
import { staggerContainer } from '../utils/motion';

const TempWrapper = (Component, idName) => 
function HOC(){
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className={`${styles.padding} max-w-7xl x-auto relative z-0`}
            viewport={{ once: true, amount: 0.25 }}>
            <span className='hash-span' id={idName}>&nbsp;</span>
            <Component />
        </motion.section>
    );
}

export default TempWrapper;
