import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"

const Hero = ()=>{
    return <section className={styles.container}>
        {/* contain text on the left hand side */}
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sanket</h1>
            <p className={styles.description}>I'm a Frontend Developer, with 2 years of experience using JS and ReactJS. 
                Reach out if you want to know more!
            </p>
            <a href="mailto:sanketrinayat17@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        {/* Image on the Right hand side */}
        <img src={getImageUrl("hero/PP-circle.png")} className={styles.heroImg} alt="Hero image of me"/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>;
}


export default Hero